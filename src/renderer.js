const buttonCreate = document.getElementById("button-create");
const textareaClientNames = document.getElementById("textarea-clientnames");

const textareaDataToArray = d=>{
    // let arr = d.split("\n");
    let arr = d.split(/[\n,]/); // Split on commas & newlines using regex
    for (let i=0; i<arr.length; i++) { // Remove whitespace from each elm
        arr[i] = arr[i].trim();
    }
    arr = arr.filter(e=>e!==""); // Remove empty string elements from arr
    return arr;
};

buttonCreate.addEventListener("click", ()=>{
    console.log(textareaDataToArray(textareaClientNames.value));
    textareaClientNames.value = "";
    // console.log(rawClientNames);
    // window.iu.mkdir(rawClientNames)
});