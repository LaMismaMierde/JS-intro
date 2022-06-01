

let anyshit = null;

function isEmpty(value) {
    if (Array.isArray(value)) {
        if (value.length === 0) {
            return true;
        } return false;
    } else if (typeof value === "object") {
        if (Object.keys(value).length === 0) {
            return true;
        } return false;
    } else {
        return false;
    }
}
console.log(isEmpty(anyshit))

// зачем тайп оф объект? 





const isEmpty = (value) => {
    if (!value) return undefined; // Обрабатываем null и undefined - сразу возвращаем undefined
    if (Array.isArray(value)) { // Проверяем если массив
       if (value.length == 0) { // Проверяем если массив пустой, значит возвращаем true
          return true
       }
       return false // Если массив не пустой, возвращаем false
    } else {
       if (Object.keys(value).length == 0) { // Если не массив, проверяем что у объекта есть ключи, ключи могут быть в {}, если их нет, то возврат true
          return true
       }
       return false // Если не массив и ключи есть в объекте - возвращаем false
    }
 }