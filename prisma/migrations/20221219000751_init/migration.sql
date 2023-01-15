-- CreateTable
CREATE TABLE "Plane" (
    "id" SERIAL NOT NULL,
    "reg_number" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "airline" TEXT NOT NULL,

    CONSTRAINT "Plane_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Airport" (
    "id" SERIAL NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,

    CONSTRAINT "Airport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Flight" (
    "id" SERIAL NOT NULL,
    "flight_number" TEXT NOT NULL,
    "arrival_code_id" INTEGER NOT NULL,
    "depature_code_id" INTEGER NOT NULL,
    "departure_time" TIMESTAMP(3) NOT NULL,
    "flight_time" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "planeId" INTEGER NOT NULL,

    CONSTRAINT "Flight_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Airport_city_key" ON "Airport"("city");

-- CreateIndex
CREATE UNIQUE INDEX "Flight_planeId_key" ON "Flight"("planeId");

-- AddForeignKey
ALTER TABLE "Flight" ADD CONSTRAINT "Flight_arrival_code_id_fkey" FOREIGN KEY ("arrival_code_id") REFERENCES "Airport"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Flight" ADD CONSTRAINT "Flight_depature_code_id_fkey" FOREIGN KEY ("depature_code_id") REFERENCES "Airport"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Flight" ADD CONSTRAINT "Flight_planeId_fkey" FOREIGN KEY ("planeId") REFERENCES "Plane"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
