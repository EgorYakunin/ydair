-- CreateTable
CREATE TABLE "Plane" (
    "id" SERIAL NOT NULL,
    "reg_number" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "airline" TEXT NOT NULL,

    CONSTRAINT "Plane_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Flight" (
    "id" SERIAL NOT NULL,
    "flight_number" TEXT NOT NULL,
    "arrival_code" TEXT NOT NULL,
    "arrival_city" TEXT NOT NULL,
    "departure_code" TEXT NOT NULL,
    "departure_city" TEXT NOT NULL,
    "departure_time" TEXT NOT NULL,
    "flight_time" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "planeId" INTEGER NOT NULL,

    CONSTRAINT "Flight_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Airport" (
    "id" SERIAL NOT NULL,
    "city" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "Airport_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Flight_planeId_idx" ON "Flight"("planeId");

-- CreateIndex
CREATE UNIQUE INDEX "Airport_code_key" ON "Airport"("code");
