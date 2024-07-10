-- CreateTable
CREATE TABLE "metadata_mst" (
    "screen_code" VARCHAR(10) NOT NULL,
    "meta_code" VARCHAR(10) NOT NULL,
    "screen_name" VARCHAR(50) NOT NULL,
    "meta_code_name" VARCHAR(50) NOT NULL,

    CONSTRAINT "metadata_mst_pkey" PRIMARY KEY ("screen_code","meta_code")
);

-- CreateTable
CREATE TABLE "quickcode_mst" (
    "quick_code_type" VARCHAR(10) NOT NULL,
    "quick_code" VARCHAR(10) NOT NULL,
    "language_code" INTEGER NOT NULL,
    "quickcode_name" VARCHAR(100) NOT NULL,
    "concurrency_val" INTEGER,
    "created_by" VARCHAR(50),
    "created_date" TIMESTAMP,
    "updated_by" VARCHAR(50),
    "updated_date" TIMESTAMP,

    CONSTRAINT "quickcode_mst_pkey" PRIMARY KEY ("quick_code_type","quick_code","language_code")
);

-- CreateTable
CREATE TABLE "country_mst" (
    "country_code" VARCHAR(10) NOT NULL,
    "language_code" INTEGER NOT NULL,
    "country_name" VARCHAR(100) NOT NULL,
    "nationality" VARCHAR(100) NOT NULL,
    "ISD_code" VARCHAR(5) NOT NULL,
    "concurrency_val" INTEGER,
    "created_by" VARCHAR(50),
    "created_date" TIMESTAMP,
    "updated_by" VARCHAR(50),
    "updated_date" TIMESTAMP,

    CONSTRAINT "country_mst_pkey" PRIMARY KEY ("country_code","language_code")
);

-- CreateTable
CREATE TABLE "state_mst" (
    "state_code" VARCHAR(10) NOT NULL,
    "country_code" VARCHAR(10) NOT NULL,
    "language_code" INTEGER NOT NULL,
    "state_name" VARCHAR(100) NOT NULL,
    "ISD_code" VARCHAR(4) NOT NULL,
    "concurrency_val" INTEGER,
    "created_by" VARCHAR(50),
    "created_date" TIMESTAMP,
    "updated_by" VARCHAR(50),
    "updated_date" TIMESTAMP,

    CONSTRAINT "state_mst_pkey" PRIMARY KEY ("state_code","country_code","language_code")
);

-- CreateTable
CREATE TABLE "province_mst" (
    "province_code" VARCHAR(10) NOT NULL,
    "country_code" VARCHAR(10) NOT NULL,
    "language_code" INTEGER NOT NULL,
    "province_name" VARCHAR(100) NOT NULL,
    "short_name" VARCHAR(5) NOT NULL,
    "date_format" VARCHAR(8),
    "academic_year" VARCHAR(12),
    "concurrency_val" INTEGER,
    "created_by" VARCHAR(50),
    "created_date" TIMESTAMP,
    "updated_by" VARCHAR(50),
    "updated_date" TIMESTAMP,

    CONSTRAINT "province_mst_pkey" PRIMARY KEY ("province_code","country_code","language_code")
);

-- CreateTable
CREATE TABLE "apostolates_mst" (
    "apostolate_code" VARCHAR(10) NOT NULL,
    "centre_type_code" VARCHAR(10) NOT NULL,
    "language_code" INTEGER NOT NULL,
    "apostolate_name" VARCHAR(100) NOT NULL,
    "centre_type_name" VARCHAR(5) NOT NULL,
    "date_format" VARCHAR(8),
    "academic_year" VARCHAR(12),
    "concurrency_val" INTEGER,
    "created_by" VARCHAR(50),
    "created_date" TIMESTAMP,
    "updated_by" VARCHAR(50),
    "updated_date" TIMESTAMP,

    CONSTRAINT "apostolates_mst_pkey" PRIMARY KEY ("apostolate_code","centre_type_code","language_code")
);

-- CreateTable
CREATE TABLE "users_mst" (
    "province_code" VARCHAR(10) NOT NULL,
    "user_id" VARCHAR(50) NOT NULL,
    "language_code" INTEGER NOT NULL,
    "first_name" VARCHAR(50) NOT NULL,
    "last_name" VARCHAR(50),
    "password" VARCHAR(20) NOT NULL,
    "user_type_code" VARCHAR(10) NOT NULL,
    "concurrency_val" INTEGER,
    "created_by" VARCHAR(50),
    "created_date" TIMESTAMP,
    "updated_by" VARCHAR(50),
    "updated_date" TIMESTAMP,

    CONSTRAINT "users_mst_pkey" PRIMARY KEY ("province_code","user_id","language_code")
);

-- CreateTable
CREATE TABLE "division_setup_mst" (
    "province_code" VARCHAR(10) NOT NULL,
    "division_type_code" VARCHAR(50) NOT NULL,
    "division_code" VARCHAR(10) NOT NULL,
    "language_code" INTEGER NOT NULL,
    "division_name" VARCHAR(50) NOT NULL,
    "concurrency_val" INTEGER,
    "created_by" VARCHAR(50),
    "created_date" TIMESTAMP,
    "updated_by" VARCHAR(50),
    "updated_date" TIMESTAMP,

    CONSTRAINT "division_setup_mst_pkey" PRIMARY KEY ("province_code","division_type_code","division_code","language_code")
);
