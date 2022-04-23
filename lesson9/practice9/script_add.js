/* а) Используйте прототипное наследование.
б) Базовый класс должен состоять из минимум 6 различных свойств.
в) Каждый класс - наследник должен расширять базовый класс и включать два или более дополнительных свойства.
г) Каждый класс - наследник должен унаследовать как минимум 1 метод из родительского класса. Также добавьте по одному уникальному методу каждому классу наследнику.


Класс «Растение». Наследуемые классы: папоротник и ель обыкновенная. Возможные поля: название, описание, вид, возраст, класс, размер соцветия, класс опасности, ареал произрастания, область применения (в пищевой промышленности, в получении лекарственных препаратов, в сельском хозяйстве...), первооткрыватель, место произрастания и т.д. */



function Plant(name, about, view, age, clasis, hazardClass, habitat, size, applicationArea) {
    this.name = name;
    this.about = about;
    this.view = view;
    this.agw = age;
    this.clasis = clasis;
    this.hazardClass = hazardClass;
    this.habitat = habitat;
    this.size = size;
    this.applicationArea = applicationArea;

    this.getName = function () {
        return name;
    }
    this.getSize = function () {
        return size;
    }
}

function Fern(name, about, view, age, clasis, hazardClass, habitat, size, inflorescenceSize) {
    Plant.call(this, name, about, view, age, clasis, hazardClass, habitat, size);

    this.inflorescenceSize = inflorescenceSize;

    this.getinflorescenceSize = function () {
        return inflorescenceSize;
    }
}

Plant.prototype = Object.create(Fern.prototype)

let fern = new Fern('Папоротник', 'отдел сосудистых растений, в который входят как современные папоротники, так и одни из древнейших высших растений, появившихся около 405 млн лет назад в девонском периоде палеозойской эры. Гигантские растения из группы древовидных папоротников во многом определяли облик планеты в конце палеозойской — начале мезозойской эры.', 'Кустарники', 'Появились около 405 лет назад', 'Травянистые', 'Не опасен', 'Распространены повсеместно', 'Размер папоротников .....', 765756);

console.log(fern);
console.log(fern.getName());
console.log(fern.getSize());
console.log(fern.getinflorescenceSize());

function NorwaySpruce(name, about, view, age, clasis, hazardClass, habitat, size, applicationArea) {
    Plant.call(this, name, about, view, age, clasis, hazardClass, habitat, size, applicationArea);
    this.applicationArea = applicationArea;

    this.getapplicationArea = function () {
        return applicationArea;
    }
}

Plant.prototype = Object.create(NorwaySpruce.prototype)

let norwaySpruce = new NorwaySpruce();



