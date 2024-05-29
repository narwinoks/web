-- CreateTable
CREATE TABLE "contents" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "slug" TEXT,
    "image" TEXT,
    "body" JSONB,
    "category" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "contents_pkey" PRIMARY KEY ("id")
);
