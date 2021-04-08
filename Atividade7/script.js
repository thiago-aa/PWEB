
const handleValues = () => {
    let nums = [];
    nums[0] = parseFloat(document.getElementById('n1').value);
    nums[1] = parseFloat(document.getElementById('n2').value);
    nums[2] = parseFloat(document.getElementById('n3').value);
    return nums;
}
const handleBigger = (nums) => {
    if(nums[0] > nums[1] && nums[0] > nums[2]){
        document.getElementById('result').innerHTML = 'O Número 1 é o maior';
    } else if(nums[1] > nums[0] && nums[1] > nums[2]) {
        document.getElementById('result').innerHTML = 'O Número 2 é o maior';
    } else {
        document.getElementById('result').innerHTML = 'O Número 3 é o maior';
    }
}

