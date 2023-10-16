-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(40) NOT NULL,
    "bio" VARCHAR(240) NOT NULL DEFAULT '',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" VARCHAR(40) NOT NULL,
    "passhash" VARCHAR(80) NOT NULL,
    "profile_banner" VARCHAR(50) NOT NULL DEFAULT '',
    "profile_pic" VARCHAR(50) NOT NULL DEFAULT '',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
