import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getScreenCodeForQuickCodeType = (quick_code_type) => {
  const mapping = {
    "Blood Group": "qckcode",
    "Nationality": "qckcode",
    "Departure Type": "qckcode",
    "Scholastics Type": "qckcode",
    "Designation Type": "qckcode",
    "Language Definition": "qckcode",
    "Apostolate": "qckcode",
    "Centre Type": "qckcode",
    "Division Type": "qckcode",
    "User Type": "qckcode",
    "Member Type": "qckcode",
    // Add other mappings as needed
  };

  return mapping[quick_code_type];
};

export const insertQuickCode = async (req, res) => {
  try {
    const {
      quick_code_type,
      quick_code,
      language_code,
      quickcode_name,
      concurrency_val,
      created_by,
      created_date,
      updated_by,
      updated_date,
    } = req.body;

    console.log('Received data:', req.body);

    // Validate input lengths
    const errors = [];
    if (quick_code_type.length > 50) errors.push('quick_code_type');
    if (quick_code.length > 10) errors.push('quick_code');
    if (quickcode_name.length > 100) errors.push('quickcode_name');
    if (created_by && created_by.length > 50) errors.push('created_by');
    if (updated_by && updated_by.length > 50) errors.push('updated_by');

    if (errors.length > 0) {
      console.error('Input value too long for column:', errors);
      return res.status(400).json({ error: 'Input value too long for column', details: errors });
    }

    // Get screen_code based on quick_code_type
    const screen_code = getScreenCodeForQuickCodeType(quick_code_type);

    if (!screen_code) {
      console.error(`Invalid quick_code_type: ${quick_code_type}`);
      return res.status(400).json({ error: 'Invalid quick_code_type' });
    }

    console.log(`Mapped quick_code_type: ${quick_code_type} to screen_code: ${screen_code}`);

    // Check if the quick_code_type exists in metadata_mst
    const metadata = await prisma.metadata_mst.findFirst({
      where: {
        screen_code: screen_code,
        meta_code_name: quick_code_type
      },
    });

    if (!metadata) {
      console.error(`No metadata found for screen_code: ${screen_code} and meta_code_name: ${quick_code_type}`);
      return res.status(400).json({ error: 'Invalid quick_code_type' });
    }

    console.log(`Found metadata for screen_code: ${screen_code} and meta_code_name: ${quick_code_type}`);

    // Set created_date and updated_date to current date if not provided
    const currentDate = new Date();

    const result = await prisma.quickcode_mst.create({
      data: {
        quick_code_type,
        quick_code,
        language_code,
        quickcode_name,
        concurrency_val,
        created_by,
        created_date: created_date ? new Date(created_date) : currentDate,
        updated_by,
        updated_date: updated_date ? new Date(updated_date) : currentDate,
      },
    });

    console.log('Insertion successful:', result);

    res.status(201).json(result);
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Server Error' });
  }
};
