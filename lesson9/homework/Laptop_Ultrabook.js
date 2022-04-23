function Laptop(name, model, serialNumber, year, ram, rom, weight, cdrom, webCam) {
    this.name = name;
    this.model = model;
    this.serialNumber = serialNumber;
    this.year = year;
    this.ram = ram;
    this.rom = rom;
    this.weight = weight;
    this.cdrom = cdrom;
    this.webCam = webCam;
}

Laptop.prototype.getAmountRamRom = function () {
    return `ОЗУ: ${this.ram}, ПЗУ: ${this.rom}`;
}
Laptop.prototype.getNameModel = function () {
    return `Название: ${this.name}, Модель: ${this.model}`;
}

let laptop = new Laptop('Laptop', 'Lenovo', 565186466541231, 2021, 16 + 'gb', 512 + 'gb', 1.4);

//  console.log(laptop);
//  console.log(laptop.getAmountRamRom());
//  console.log(laptop.getNameModel());

function Ultrabook(name, model, serialNumber, year, weight, ram, rom, cdrom, webCam) {
    Laptop.call(this, name, model, serialNumber, year, ram, rom, weight, cdrom, webCam)

}

Ultrabook.prototype = Object.create(Laptop.prototype);

Ultrabook.prototype.getNameWeightYear = function () {
    return `Название: ${this.name}, Вес: ${this.weight}, Год изготовления: ${this.year}`;
}

let ultrabook = new Ultrabook('Ultrabook', 'Asus', 66841351681351, 2020, 1.2 + 'kg', 32 + 'gb', 1024 + 'gb');

// console.log(ultrabook);
// console.log(ultrabook.getNameWeightYear());
// console.log(ultrabook.getAmountRamRom());
// console.log(ultrabook.getNameModel());


