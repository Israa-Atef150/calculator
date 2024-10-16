// جبنا الشاشة اللي بتعرض الأرقام
let display = document.getElementById("display");
// تعريف متغير اسمه num1 لتخزين الرقم اللي هيدخله المستخدم
let num1 = "";  
// متغير fienshClec بيحدد إذا كانت العملية الحسابية خلصت ولا لأ 
let fienshClec = false;  

// لما نضغط على زرار رقم
function addNumber(numbar) {
    // لو الحسبة اللي فاتت خلصت 
    if (fienshClec) {  
        // نمسح الشاشة عشان نبدأ حسبة جديدة
        display.value = "";  
        // نقول إننا هنبدأ حساب جديد
        fienshClec = false;  
    }
    // نخزن الرقم اللي ضغط عليه المستخدم
    num1 = numbar;  
    // نضيف الرقم المدخل للشاشة
    display.value += num1;  
    // نعرض الرقم المدخل في الـConsole للتأكد
    console.log(num1);  
}

// لما نضغط على علامة (زي زائد أو ناقص)
function signClick(operation) {
    // لو خلصنا حسبة قبل كده، بنعيد الفلاغ لـfalse عشان نبدأ حساب جديد
    if (fienshClec) {  
       fienshClec = false;  
    } 
    // لو العملية اللي اخترناها هي الضرب (*)، نعرض "x" بدل النجمة
    if (operation === '*') {
         display.value += 'x';  
    } else {
        // غير كده، نضيف العملية المدخلة (زائد، ناقص، أو قسمة) للشاشة
        display.value += operation;  
    }
}

// لما تضغط على زرار النسبة المئوية (%)
function percentage() {
    // تحويل الرقم الحالي في الشاشة إلى نسبة مئوية عن طريق تقسيمه على 100
    display.value = (parseFloat(display.value) / 100).toString();  
}

// لما تضغط على زرار يساوي (=)
function equal() {
    try {
        // استبدال علامة "x" بالنجمة (*) لتنفيذ عملية الضرب بشكل صحيح
        let x = display.value.replace(/x/g, '*');
        // حساب النتيجة باستخدام دالة eval
        display.value = eval(x);  
        // نقول إن الحسبة خلصت
        fienshClec = true;  
    } catch (e) {
        // لو في خطأ أثناء الحساب، نعرض "Error" على الشاشة
        display.value = "Error";  
        // نحدد إن العملية انتهت بسبب خطأ
        fienshClec = true;  
    }
}

// لما تضغط على زرار "C" عشان تمسح كل حاجة
function clearDisplay() {
    // نمسح كل اللي مكتوب على الشاشة
    display.value = "";  
    // نبدأ حساب جديد
    fienshClec = false;  
}

// لما تضغط على زرار الحذف (Backspace)
function backspace() {
    // نحذف آخر رقم أو علامة من الشاشة
    display.value = display.value.slice(0, -1);  
}
