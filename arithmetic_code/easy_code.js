//1,翻转字符串
//先把字符串转化成数组，再借助数组的reverse方法翻转数组顺序，最后把数组转化成字符串。
function reverseString(str) {
  return str.split("").reverse().join("");
}

reverseString("hello");

//2,计算一个整数的阶乘
//如果用字母n来代表一个整数，阶乘代表着所有小于或等于n的整数的乘积。
function factorialize(num) {
 if(num<1){ 
     return 1; 
   }else{ 
     return factorialize(num-1)*num; 
   } 
}

factorialize(20);

//3,如果给定的字符串是回文，返回true，反之，返回false。
//如果一个字符串忽略标点符号、大小写和空格，正着读和反着读一模一样，那么这个字符串就是palindrome(回文)。

function palindrome(str) {
  // Good luck!
  var a = str.replace(/[^0-9A-Za-z]+/g,'').toLowerCase();
  var b = a.split("").reverse().join("");
  if(a==b){
    return true;
  }else{
    return false;
  }
}

palindrome("eye");

//4,找到提供的句子中最长的单词，并计算它的长度。
function findLongestWord(str) {
  var newArray = str.split(' ');
  var max = 0;
  for(var i=0; i<newArray.length; i++){
    if (newArray[i].length > max ){
        max = newArray[i].length;
      }
  }
  return max;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

//5,确保字符串的每个单词首字母都大写，其余部分小写。
function titleCase(str) {
  var newArray = str.toLowerCase().split(" ");
  for(var i=0;i<newArray.length;i++){
      var char = newArray[i].charAt(0);
      newArray[i] = newArray[i].replace(char,function replace(char){
              return char.toUpperCase();
              });
    }
    return newArray.join(" ");
}

titleCase("I'm a little tea pot");

//6,右边大数组中包含了4个小数组，分别找到每个小数组中的最大值，然后把它们串联起来，形成一个新数组。
function largestOfFour(arr) {
  // You can do this!
  var newArr = [];
  for(var i=0; i<arr.length; i++){
    var temp = arr[i][0];
    for(var j=0 ;j<arr[i].length;j++){
       if(arr[i][j]>temp){
         temp = arr[i][j];
       }
      newArr[i] = temp;
    }
  }
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//7,检查一个字符串(str)是否以指定的字符串(target)结尾。
//如果是，返回true;如果不是，返回false。
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  str = str.substr(str.length-target.length);
  if(str == target){
    return true;
  }else{
    return false;
  }
}

confirmEnding("Bastian", "n");

// 8,重要的事情说3遍！
// 重复一个指定的字符串 num次，如果num是一个负数则返回一个空字符串。
function repeat(str, num) {
  // repeat after me
  a="";
  if(num<0){
    str = a;
  }else{
    for(var i=0; i<num; i++){
      a += str;
    }
  }
  return a;
}

repeat("abc", 3);

//9,截断一个字符串！
/*如果字符串的长度比指定的参数num长，则把多余的部分用...来表示。

切记，插入到字符串尾部的三个点号也会计入字符串的长度。

但是，如果指定的参数num小于或等于3，则添加的三个点号不会计入字符串的长度。*/
function truncate(str, num) {
  // Clear out that junk in your trunk
  var d="";
  if(str.length>num){
    if(num>=3){
      d = str.slice(0,num-3).concat('...');
    }else{
      d = str.slice(0,num).concat('...');
    }
  }else{
      d = str;
  }
  return d;
}

truncate("A-tisket a-tasket A green and yellow basket", 11);

//10,把一个数组arr按照指定的数组大小size分割成若干个数组块。
function chunk(arr, size) {
  // Break it up.
  var num = parseInt(arr.length/size);
  var len = arr.length%size;
  var newArr = [],sot=len>0?num+1:num;
  for(var i=1; i<=sot; i++){
    var start = size*(i-1);
    var end = (i>num)?((i-1)*size+len):i*size;
    var myArr = arr.slice(start,end);
    newArr.push(myArr);
  }
  return newArr;
}

chunk(["a", "b", "c", "d"], 2);

//11,返回一个数组被截断n个元素后还剩余的元素，截断从索引0开始。
function slasher(arr, howMany) {
  // it doesn't always pay to be first
  var newArr = arr.splice(howMany,arr.length);
  return newArr;
}

slasher([1, 2, 3], 2);

//12,如果数组第一个字符串元素包含了第二个字符串元素的所有字符，函数返回true。
function mutation(arr) {
  var a = arr[0].toLowerCase();
  var b = arr[1].toLowerCase();
    for(var j=0; j<b.length; j++){
      if(a.indexOf(b.charAt(j)) == -1){
        return false;
      }
  }
  return true;
}

mutation(["hello", "hey"]);

//13,删除数组中的所有假值。
// 在JavaScript中，假值有false、null、0、""、undefined 和 NaN。
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(function(data){
    return Boolean(data) !== false;
  });
}

bouncer([7, "ate", "", false, 9]);

//14,实现一个摧毁(destroyer)函数，第一个参数是待摧毁的数组，其余的参数是待摧毁的值。
function destroyer(arr) {
  // Remove all the values
  var tempArguments = arguments;
  return arr.filter(function(data){
    for(var i=0; i<tempArguments.length; i++){
      if(data == tempArguments[i]){
        return false;
      }
    }
    return true;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//15,先给数组排序，然后找到指定的值在数组的位置，最后返回位置对应的索引。
function where(arr, num) {
  // Find my place in this sorted array.
  var newArr = arr.push(num);
  var filterNewArr = arr.sort(function(a,b){
    return a - b;
  });
  for(var i=0; i<filterNewArr.length; i++){
    if(filterNewArr[i] == num){
      return i;
    }
  }
}

where([40, 60], 50);

//16,移位密码也就是密码中的字母会按照指定的数量来做移位。
/*一个常见的案例就是ROT13密码，字母会移位13个位置。由'A' ↔ 'N', 'B' ↔ 'O'，以此类推。
写一个ROT13函数，实现输入加密字符串，输出解密字符串。
所有的字母都是大写，不要转化任何非字母形式的字符(例如：空格，标点符号)，遇到这些特殊字符，跳过它们。*/
function rot13(str) { // LBH QVQ VG!
 var newArray = [];
  for(var i = 0;i < str.length;i++){
    var numbers = str.charCodeAt(i);
    if(numbers < 65 || numbers > 90){
      newArray.push(String.fromCharCode(numbers));
    }else if(numbers > 77){
      newArray.push(String.fromCharCode(numbers - 13));
    }else{
      newArray.push(String.fromCharCode(numbers + 13));
    }
  }
  return newArray.join("");
}

/*var newArray = [];
  for(var i = 0;i < str.length;i++){
    var numbers = str.charCodeAt(i);
    if(numbers < 65 || numbers > 90){
      newArray.push(String.fromCharCode(numbers));
    }else if(numbers > 77){
      newArray.push(String.fromCharCode(numbers - 13));
    }else{
      newArray.push(String.fromCharCode(numbers + 13));
    }
  }
  return newArray.join("");*/

// Change the inputs below to test
rot13("SERR PBQR PNZC");

//17,我们会传递给你一个包含两个数字的数组。返回这两个数字和它们之间所有数字的和。
function sumAll(arr) {
  var max = Math.max.apply(null, arr);
  var min = Math.min.apply(null, arr);
  var sun = 0;
  for(var i =min; i<=max; i++){
     sun += i;
  }
  return sun;
}

sumAll([1, 4]);

//18,比较两个数组，然后返回一个新数组，该数组的元素为两个给定数组中所有独有的数组元素。换言之，返回两个数组的差异。
function diff(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
 for(var i=0; i<arr2.length; i++){
   if(arr1.indexOf(arr2[i]) == -1){
     newArr.push(arr2[i]);
   }
 }
  
  for(var j=0; j<arr1.length; j++){
   if(arr2.indexOf(arr1[j]) == -1){
     newArr.push(arr1[j]);
   }
 }
  return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//19,将给定的数字转换成罗马数字。
//所有返回的 罗马数字 都应该是大写形式。
function convert(num) {
  var nums = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  var romans =["m","cm","d","cd","c","xc","l","xl","x","ix","v","iv","i"];
  var str = '';
  nums.forEach(function(item,index,array){
     while(num >= item){
      str += romans[index];
      num -= item;
    }
  });
 return str.toUpperCase();
}

convert(36);

//20,写一个 function，它遍历一个对象数组（第一个参数）并返回一个包含相匹配的属性-值对（第二个参数）的所有对象的数组。如果返回的数组中包含 source 对象的属性-值对，那么此对象的每一个属性-值对都必须存在于 collection 的对象中。
function where(collection, source) {
  var arr = [];
  // What's in a name?
  var key = Object.keys(source);
  
  return collection.filter(function(obj){
    console.log(obj);
      return key.every(function(item){
          return obj.hasOwnProperty(item) && obj[item] === source[item];
      });
  });
}

where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
//[{ first: "Tybalt", last: "Capulet" }]
where([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 });
//[{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }]

//21,使用给定的参数对句子执行一次查找和替换，然后返回新句子。
/*第一个参数是将要对其执行查找和替换的句子。
第二个参数是将被替换掉的单词（替换前的单词）。
第三个参数用于替换第二个参数（替换后的单词）。*/

function myReplace(str, before, after) {
  if(before[0] === before[0].toUpperCase()){
        after = after[0].toUpperCase() + after.slice(1);
    }
    str = str.replace(before,after);
    return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

//22,把指定的字符串翻译成 pig latin。
//Pig Latin 把一个英文单词的第一个辅音或辅音丛（consonant cluster）移到词尾，然后加上后缀 "ay"。
function translate(str) {
 var myStr = '';
    var regex = /[aeiou]/gi;
    if(str[0].match(regex)){
        myStr = str + 'way';
    }else{
        var index = str.indexOf(str.match(regex)[0]);
        myStr = str.substr(index) + str.substring(0,index) + 'ay';
    }
  return myStr;
}

translate("consonant");

//23,DNA 链缺少配对的碱基。依据每一个碱基，为其找到配对的碱基，然后将结果作为第二个数组返回。

//Base pairs（碱基对） 是一对 AT 和 CG，为给定的字母匹配缺失的碱基。

//在每一个数组中将给定的字母作为第一个碱基返回。
function pair(str) {
  var arr = str.split('');
  var pair = '';
  return arr.map(function(item){
      switch(item){
          case 'C':
              pair = 'G';
            break;
          case 'G':
              pair = 'C';
            break;
        case 'A':
            pair = 'T';
            break;
        case 'T':
            pair = 'A';
             break;
      }
      return [item,pair];
  });
}

pair("GCG");

//24,从传递进来的字母序列中找到缺失的字母并返回它。
//如果所有字母都在序列中，返回 undefined。
function fearNotLetter(str) {
  var compare = str.charCodeAt(0),missing;
    str.split('').map(function(item,index){
        if(str.charCodeAt(index) === compare){
            ++ compare;
        }else{
            missing = String.fromCharCode(compare);
        }
    });
  return missing;
}

fearNotLetter("abce");

//25,检查一个值是否是基本布尔类型，并返回 true 或 false。
//基本布尔类型即 true 和 false。
function boo(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  return typeof bool === 'boolean';
}

boo(null);

//26,写一个 function，传入两个或两个以上的数组，返回一个以给定的原始数组排序的不包含重复值的新数组。
//换句话说，所有数组中的所有值都应该以原始顺序被包含在内，但是在最终的数组中不包含重复值。
//非重复的数字应该以它们原始的顺序排序，但最终的数组不应该以数字顺序排序。
function unite(arr1, arr2, arr3) {
 //return arguments;
  var a=[];
  for(var i=0; i<arguments.length; i++){
    for(var j=0; j<arguments[i].length; j++){
      a.push(arguments[i][j]);
    }
  }

  var b=[];
  for(var k = 0; k < a.length; k++) {
    if (b.indexOf(a[k]) == -1){
      b.push(a[k]);
    }
  }
  return b;
}
unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);

//27,将字符串中的字符 &、<、>、" （双引号）, 以及 ' （单引号）转换为它们对应的 HTML 实体。
function convert(str) {
 /*var i=0;
  var arr=str.split("");

  for(i=0;i<arr.length;i++){
    switch(arr[i]){
      case '&':
        arr.splice(i,1,'&amp;');
        break;
      case '>':
        arr.splice(i,1,'&gt;');
        break;
      case '<':
        arr.splice(i,1,'&lt;');
        break;
      case "'":
        arr.splice(i,1,'&apos;');
        break;
      case '"':
        arr.splice(i,1,'&quot;');
        break;
    }
  }
  str=arr.join('');
 
  return str;*/
  return str.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")  
            .replace(/\"/g,"&quot;").replace(/\'/g,"&apos;");  
}

convert("Dolce & Gabbana");

//28,将字符串转换为 spinal case。Spinal case 是 all-lowercase-words-joined-by-dashes 这种形式的，也就是以连字符连接所有小写单词。
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  str = str.replace(/_/g," ").replace(/([A-Z])/g," $1").replace(/^\s/, "").replace(/\s+/g, "-").toLowerCase();
  return str;
}

spinalCase('This Is Spinal Tap');

//29,给一个正整数num，返回小于或等于num的斐波纳契奇数之和。
/*斐波纳契数列中的前几个数字是 1、1、2、3、5 和 8，随后的每一个数字都是前两个数字之和。
例如，sumFibs(4)应该返回 5，因为斐波纳契数列中所有小于4的奇数是 1、1、3。
提示：此题不能用递归来实现斐波纳契数列。因为当num较大时，内存会溢出，推荐用数组来实现。*/
var sumFibs = function() {
    var cache = [1, 1];
    return function (n) {
        if (n >= cache.length) {
            for (var i = cache.length; i < n ; i++ ) {
                cache[i] = cache[i - 2] + cache[i - 1];
            }
        }
        var arr=cache.filter(function(val){
           return val%2!==0 && val<=n;
         });
        return arr.reduce(function(pre,next){
          return pre+next;
        });
    };

}();

sumFibs(4);

//30,求小于等于给定数值的质数之和。
/*只有 1 和它本身两个约数的数叫质数。例如，2 是质数，因为它只能被 1 和 2 整除。1 不是质数，因为它只能被自身整除。
给定的数不一定是质数。*/

function sumPrimes(num) {
   //将所有小于等于num的质数放进一个数组
  var arr=[];
  //1不是质数，从2开始循环，需算上num
  for(var i=2; i<=num; i++){
    var j=2;
    //判断i能否被从2开始的数整除
    while(i%j!==0){
      j++;
    }
    //判断这个数是不是自身，是则加进数组
    if(i==j){
      arr.push(i);
    }
  }
  //对数组求和
  var result=arr.reduce(function (a,b){return a+b;});
  
  return result;
}

sumPrimes(10);

//31,找出能被两个给定参数和它们之间的连续数字整除的最小公倍数。
//范围是两个数字构成的数组，两个数字不一定按数字顺序排序。
function smallestCommons(arr) {
  arr=arr.sort(function(a,b){
    return a-b;  
  });  
  function fun(m,n){    
    if(m%n===0) return n;    
    return fun(n,m%n);  
  }  
  var num=arr[0];  
  for(var i=arr[0]+1;i<=arr[1];i++){
    num*=i/fun(num,i);  
  }  
  return num;
}


smallestCommons([1,5]);

//32,写一个 function，它浏览数组（第一个参数）并返回数组中第一个通过某种方法（第二个参数）验证的元素。
function find(arr, func) {
  var num = 0;  
  for(var i=0;i<arr.length;i++){    
    if(func(arr[i])===true){      
      num=arr[i];
      break;    
    }  
  }  
  if(num===0){
    return undefined;
  }  
  return num;
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });

//33,让我们来丢弃数组(arr)的元素，从左边开始，直到回调函数return true就停止。
//第二个参数，func，是一个函数。用来测试数组的第一个元素，如果返回fasle，就从数组中抛出该元素(注意：此时数组已被改变)，继续测试数组的第一个元素，如果返回fasle，继续抛出，直到返回true。
//最后返回数组的剩余部分，如果没有剩余，就返回一个空数组。
function drop(arr, func) {
    // Drop them elements.  
  for(var i=0;i<arr.length;i++){
    if(func(arr[i])===false){
      arr.splice(i,1,'false');    
    }else{ 
      break;    
    }  
  }  
  arr=arr.filter(function(a){
    return a!='false';  
  });  
  
  return arr;
}

drop([1, 2, 3], function(n) {return n < 3; });

//34,对嵌套的数组进行扁平化处理。你必须考虑到不同层级的嵌套。
function steamroller(arr) {
  // I'm a steamroller, baby  
  var newArr=[];  
  function fun(a){
    for(var j=0;j<a.length;j++){
      if(Array.isArray(a[j])===true){
        fun(a[j]);          
      }else{
        newArr.push(a[j]);            
      }    
    }    
    return newArr;  
  }    
  fun(arr);
  return newArr;
}

steamroller([1, [2], [3, [[4]]]]);

//35,传入二进制字符串，翻译成英语句子并返回。
function binaryAgent(str) {
  return str.split(' ')
    .map(function(a){
    return String.fromCharCode(parseInt(a,2));
  }).join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

//36,所有的东西都是真的！
//完善编辑器中的every函数，如果集合(collection)中的所有对象都存在对应的属性(pre)，并且属性(pre)对应的值为真。函数返回ture。反之，返回false。
//记住：你只能通过中括号来访问对象的变量属性(pre)。
function every(collection, pre) {
  // Is everyone being true?
  var i='';  var bCheck=true;
  //假设为真  
  for(i in collection){
    if(!collection[i][pre]){
      bCheck=false;    
    }  
  }  
  return bCheck;
}

every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

//37,创建一个计算两个参数之和的 function。如果只有一个参数，则返回一个 function，该 function 请求一个参数然后返回求和的结果。
function add(x) { 
  if (arguments.length === 1 && typeof x === "number") {   
    return function (y) {
      if (typeof y === "number"){
        return x + y;     
      }     
    };  
  }else {    
    if (typeof x !== "number"|| typeof arguments[1] !== "number") {
      return undefined;    
    }   
    return arguments[0] + arguments[1];  
  } 
} 

add(2,3);

//38,如果传入字符串是一个有效的美国电话号码，则返回 true.
function telephoneCheck(str) {
  // Good luck!
 var re=/^[1-9]\d{9}$|^[1-9]\d{2}-[0-9]\d{2}-[0-9]\d{3}$|^\([1-9]\d{2}\)[0-9]\d{2}-[0-9]\d{3}$|^\([1-9]\d{2}\)\s[0-9]\d{2}-[0-9]\d{3}$|^[1-9]\d{2}\s[0-9]\d{2}\s[0-9]\d{3}$|^[1]\s[0-9]\d{2}\s[0-9]\d{2}\s[0-9]\d{3}$|^[1]\s[0-9]\d{2}-[0-9]\d{2}-[0-9]\d{3}$|^[1]\s\([0-9]\d{2}\)\s[0-9]\d{2}-[0-9]\d{3}$|^[1]\([0-9]\d{2}\)[0-9]\d{2}-[0-9]\d{3}$/g;
  console.log(str.match(re));
  
  if(str.match(re)){
    console.log('true');
    return true;
  }else{
    console.log('false');
    return false;
  }
}

telephoneCheck("555-555-5555");

//39,创建一个函数，接受两个或多个数组，返回所给数组的 对等差分(symmetric difference) (△ or ⊕)数组.
//给出两个集合 (如集合 A = {1, 2, 3} 和集合 B = {2, 3, 4}), 而数学术语 "对等差分" 的集合就是指由所有只在两个集合其中之一的元素组成的集合(A △ B = C = {1, 4}). 对于传入的额外集合 (如 D = {2, 3}), 你应该安装前面原则求前两个集合的结果与新集合的对等差分集合 (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).
function sym(args) {
  var arr=[].slice.call(arguments);//转化为数组；
  var temp=arr.reduce(function(prev,cur,index,array){
    var a=prev.filter(function(item){
      return cur.indexOf(item)==-1;
    });//返回前一个结果中，没有出现在下个结果中的部分（数组）
    var b=cur.filter(function(item){
      return prev.indexOf(item) < 0;
    });//返回下个参数中，未有出现在上个结果中的部分（数组）
    return a.concat(b);//通通连起来。输出为下个结果
  });
  console.log(temp);
  return temp.filter(function(item,index,array){
    return array.indexOf(item) == index;
  });

  //之前只是比较数组彼此之间的重复，数组内部本身也可能存在重复
  //现在解决遗留下来的问题。
  return temp.filter(function(item,index,array){
    return array.indexOf(item) == index;
  });//自身查重只需要让它本身第一次出现在原数组的位置为索引值index，就可以保留且只保留一个。
}

sym([1, 2, 3], [5, 2, 1, 4]);

//40,设计一个收银程序 checkCashRegister() ，其把购买价格(price)作为第一个参数 , 付款金额 (cash)作为第二个参数, 和收银机中零钱 (cid) 作为第三个参数.
//cid 是一个二维数组，存着当前可用的找零.
//当收银机中的钱不够找零时返回字符串 "Insufficient Funds". 如果正好则返回字符串 "Closed".
//否则, 返回应找回的零钱列表,且由大到小存在二维数组中.
function checkCashRegister(price, cash, cid) {
  // 刚刚好
    if(price==cash){
      return "No Need Back";
    }

    // 付款不足
    if (price > cash){
      return "Need More Money";
    }

    var base=100;//金额基数
    var change=(cash-price)*base; //找零

    //定义一个函数，用来求零钱和。
    var getTotalMoney=function(arr){
        var totalMoney=0;
        arr.reduce(function (preV, currV, currIndex, array){
            totalMoney+=base*(preV[1]+currV[1]);
            return currV;
        });//叠代算法：求零钱之和。
        return totalMoney;
    };

    //余额不足，没法找了
    var remain = getTotalMoney(cid);

    if (remain==change){//如果零钱数等于应找数额，返回closed
        return "Closed";    
    }else if(remain < change){//没钱找了
        return "Insufficient Funds";
    }


    // 对应：1角-5角-1元-5元-10元-20元-50元-100元(以元为单位的基础上乘以面值基数：base这里为100)
    var dollar= [1, 5, 10, 25, 100, 500, 1000, 2000, 10000]; // TODO
    var pay={};//保存的key：dollar中面值索引，value：要找的此面值的个数
    var currLast=0;// 当前面值所剩余额
    var currMoney=0;//当前金钱面额(dollar中对应的值)
    for (var i=dollar.length-1;i>=0;i--){//由大到小循环
        //当前面值剩余金额
        currLast=cid[i][1]*base;      
        if (currLast<=0) { 
            continue;//当前面值的金额剩余0，跳过
        }

        //当前金额面值
        currMoney=dollar[i];
        // 在当前面值下取钱必须同时满足两个条件：
        // 1. 找零必须大于当前面值，比如找零51元，才可以从50里面取钱。
        // 2. 剩余的当前面值的总额足够，比如找4元，但我只有3张1元，就不符合取钱条件
        if(change>currMoney){//如果当前金额面值小于应找钱数
            if(change<currLast){ 
                // 找零小于当前面值剩余金额：比如找钱51元，当前50面值总额余额还有150元。
                pay[i]=Math.floor(change/currMoney);//取最大张数
                change-=currMoney*pay[i];//取完之后从应找余额中减去（张数x面值）
            }else{
                // 找零大于当前面值剩余金额，比如找零51元，我50元面额总值只有50元
                // 则将所有剩余金额找出
                pay[i]=Math.floor(currLast/currMoney);
                change-=currLast;//就直接减去当前面值剩余所有金额
            }
        }
    }//循环结束之后得到一个pay对象，里面包括了面值和对应应找的钱。


    console.log(pay);
    var res=[];
    // 组织最后需要找零的钱，作为最终返回的数组。
    var keys=Object.keys(pay);//找到pay对象
    var idx=0;
    var total=0;//应找零钱（pay）的总额
    for (var j=0; j<keys.length; j++) {
        // 需要找零的面值索引：比如100，50，20,10...等等
        idx=parseInt([keys[j]]);

        //计算该面值最后找出的零钱(公式：面值x需要找出数量 / 金钱面值基数)
        cid[idx][1]=dollar[idx]*pay[keys[j]]/base;

        res.unshift(cid[idx]);//把结果添加到数组的开头。符合由面值大到小的规律。

        total += dollar[idx]*pay[keys[j]]; 
        // 顺便计算下这里计算的结果应该和最开始需要找零的金额一致：
        // 面值x需要找出数量——返回到total结果中
    } 

    // 找到最后，所有能找的面值加起来还不够
    // 这里与最开始不同，这里是过滤掉了所有找不开的面值
    // 比如：要找0.05元，但是目前剩余一张0.01和1元的面值，依旧判定为找不开
    // 而最开始的是所有余额加起来都不够找
    if (total<change) {
        return "Insufficient Funds";
    }
    console.log(res);
    return res;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);

//41,依照一个存着新进货物的二维数组，更新存着现有库存(在 arr1 中)的二维数组. 如果货物已存在则更新数量 . 如果没有对应货物则把其加入到数组中，更新最新的数量. 返回当前的库存数组，且按货物名称的字母顺序排列.
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    var oCur={};
  var oNew={};
  function arrToObj(arr,obj){
    for(var i=0;i<arr.length;i++){
      obj[arr[i][1]]=arr[i][0];
    }
  }//构造库存对象。
  arrToObj(arr1,oCur);
  arrToObj(arr2,oNew);

  //添加货物及属性
 
  for(i in oNew){
    console.log(oCur.hasOwnProperty(i));
    if(oCur.hasOwnProperty(i)){
      oCur[i]+=oNew[i];
    }else{
      oCur[i]=oNew[i];
    }
  }

  //属性名排序
  function objKeySort(obj) {//排序的函数
      var newkey = Object.keys(obj).sort();
  　　//newkey是一个排序后的属性名数组
      var newObj = {};
      for (var i = 0; i < newkey.length; i++) {
          newObj[newkey[i]] = obj[newkey[i]];
      }
      return newObj;//返回排好序的新对象
  }
  oCur=objKeySort(oCur);

  //反向编译这个对象，然后返回成最初的数组。
  var newArr=[];

  for(i in oCur){
    newArr.push([oCur[i],i]);
  }
  console.log(newArr);
  return newArr;
}
// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);

//42,把一个字符串中的字符重新排列生成新的字符串，返回新生成的字符串里没有连续重复字符的字符串个数.连续重复只以单个字符为准

//例如, aab 应该返回 2 因为它总共有6中排列 (aab, aab, aba, aba, baa, baa), 但是只有两个 (aba and aba)没有连续重复的字符 (在本例中是 a).
function permAlone(str) {
  //创建正则
  var regex = /(.)\1+/g;

  // 转化数组
  var arr = str.split('');
  var permutations = [];
  var tmp;

  //全部相等时返回0，否则再判断没意义。
  if (str.match(regex) !== null && str.match(regex)[0] === str) return 0;

  // 创建一个swap函数来交换变量的内容。
  function swap(index1, index2) {
    tmp = arr[index1];
    arr[index1]=arr[index2];
    arr[index2]=tmp;
  }//简单地说是：ab，ba

  //使用该函数算法生成数组排列。
  function generate(int) {
    if(int === 1){//如果数组内只有一个数据，换言之只有单个字母，直接返回原数组。
      //确保加入我们创建的字符排列是个数组 
      permutations.push(arr.join(''));
    }else{
      for (var i=0; i<int;i++){
        generate(int-1);//自身调用，简而言之就是把后边自身的全排列好。
        swap(int % 2? 0 : i, int - 1);//偶数取0，否则取i
      }
    }
  }

  generate(arr.length);

  //过滤重复排列的数组。
  var filtered = permutations.filter(function(string) {
    return !string.match(regex);
  });

  //统计变量
  return filtered.length;
}

permAlone('aab');

//43,把常见的日期格式如：YYYY-MM-DD 转换成一种更易读的格式。
//易读格式应该是用月份名称代替月份数字，用序数词代替数字来表示天 (1st 代替 1).
//记住不要显示那些可以被推测出来的信息: 如果一个日期区间里结束日期与开始日期相差小于一年，则结束日期就不用写年份了。月份开始和结束日期如果在同一个月，则结束日期月份就不用写了。
//另外, 如果开始日期年份是当前年份，且结束日期与开始日期小于一年，则开始日期的年份也不用写。
function makeFriendlyDates(arr) {
   //定义两个对象，一个存放参数1，一个存放参数2
  var oDate1={},oDate2={};
  var reArr=[];
  for(var i=0;i<arr.length;i++){
    reArr[i]=arr[i].split('-');
    if(i==0){
        oDate1["year"]=reArr[i][0];
        oDate1["month"]=reArr[i][1];
        oDate1["day"]=reArr[i][2];
    }else{
        oDate2["year"]=reArr[i][0];
        oDate2["month"]=reArr[i][1];
        oDate2["day"]=reArr[i][2];
    }    
  }//通过这段程序把两个日期参数转化为两个json对象。格式为{"year":xxxx,"month:xx","day":xxx}（xxx全为数字）

  //因为上面的json还不足以满足格式，所以还得写个json，再写个函数转化这两个json。
  var oMonth={
    "01":"January",
    "02":"February",
    "03":"March",
    "04":"April",
    "05":"May",
    "06":"June",
    "07":"July",
    "08":"August",
    "09":"September",
    "10":"October",
    "11":"November",
    "12":"December"
  };//定义月份对象
  function getFunDay(obj){
    //判断日期:
    switch(obj["day"]){
        case "01":
            obj["day"]="1st";
            break;
        case "02":
            obj["day"]="2nd";
            break;
        case "03":
            obj["day"]="3rd";
            break;
        case "04":
        case "05":
        case "06":
        case "07":
        case "08":
        case "09":
            obj["day"]=obj["day"][1]+"th";
            break;
        case "21":
            obj["day"]+='st';
            break;
        case "22":
            obj["day"]+='nd';
            break;
        case "23":
            obj["day"]+='rd';
            break;
        default:
            obj["day"]+='th';
    }
    //判断月份
    for(i in oMonth){
        if(obj["month"]==i){
            obj["month"]=oMonth[i];
        }
    }
  }
  getFunDay(oDate1);
  getFunDay(oDate2);
  //console.log(oDate1);
  //转化之后这两个对象的格式就正确了。

  //接下来是一段非常繁琐的判断流程，如果是新手，建议画出流程图来做
  if(oDate1["year"]==oDate2["year"]){//是否同年
    if(oDate1["month"]==oDate2["month"]){//是否同年同月
        if(oDate1["day"]==oDate2["day"]){//是否同年同月同日
            console.log([[oDate1["month"],oDate1["day"]+",",oDate1["year"]].join(' ')])//注意，同年同月同日的话，这里有个全直接输出口。
            return [[oDate1["month"],oDate1["day"]+",",oDate1["year"]].join(' ')];
        }else{//同年同月不同日
          delete oDate1["year"];
          delete oDate2["year"];
          delete oDate2["month"];  
        } 
    }else{ //同年不同月   
        delete oDate2["year"];
    }
  }else if((Math.abs(oDate1["year"]-oDate2["year"])==1)){//不同年，年份但只差一年
    if(oDate1["month"]<oDate2["month"]){//如果在一年以内
        delete oDate1["year"];
        delete oDate2["year"];
    }else if(oDate1["month"]==oDate2["month"]){//差一年同月
        if(oDate1["day"]>oDate2["day"]){ //小于一年
            delete oDate2["year"];
        }
    } 
  }

  //以下定义输出函数。把json数据转化为一个字符串。
  //默认的输出格式里，日期是带逗号的，但经过上面一轮判断，日期可能变成字符串的最后一个。在带逗号就不对了。所以需要判断字符串
  function retArr(obj1,obj2){
    var returnArr=[];
    //先按输出规则构造一个数组
    //这些规则可能调用了已被删除的属性。对应为undefined。所以过滤掉。
    var objstr1=[obj1["month"],obj1["day"]+",",obj1["year"]].filter(function(a){return a!=undefined}).join(' ');
    var objstr2=[obj2["month"],obj2["day"]+",",obj2["year"]].filter(function(a){return a!=undefined}).join(' ');
    //
    if(objstr1.substring(objstr1.length-1)==','){
        
        objstr1=objstr1.replace(objstr1.substring(objstr1.length-1),'')
    }
    if(objstr2.substring(objstr2.length-1)==','){
        console.log(objstr1.substring(objstr1.length-1))
        objstr2=objstr2.replace(objstr2.substring(objstr2.length-1),'')
    }
    returnArr=[objstr1,objstr2];
    
    return returnArr;
  }
  console.log(retArr(oDate1,oDate2));
  return retArr(oDate1,oDate2);
}

makeFriendlyDates(['2016-07-01', '2016-07-04']);

//44,用下面给定的方法构造一个对象.
/*方法有 getFirstName(), getLastName(), getFullName(), setFirstName(first), setLastName(last), and setFullName(firstAndLast).
所有有参数的方法只接受一个字符串参数.
所有的方法只与实体对象交互.*/
var Person = function(firstAndLast) {
  var arr = firstAndLast.split(" ");
  var f = arr[0];
  var l = arr[1];
  this.getFirstName = function(){
    return f;
  };
  this.getLastName = function(){
    return l;
  };
  this.getFullName = function(){
    return f + " " + l;
  };
  this.setFirstName = function(first){
     f = first;
  };
  this.setLastName = function(last){
    l = last;
  };
  this.setFullName = function(firstAndLast){
    var full = firstAndLast.split(" ");
    f = full[0];
    l = full[1];
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();

//45,返回一个数组，其内容是把原数组中对应元素的平均海拔转换成其对应的轨道周期.

/*原数组中会包含格式化的对象内容，像这样 {name: 'name', avgAlt: avgAlt}.
至于轨道周期怎么求，戳这里 on wikipedia (不想看英文的话可以自行搜索以轨道高度计算轨道周期的公式).
求得的值应该是一个与其最接近的整数，轨道是以地球为基准的.
地球半径是 6367.4447 kilometers, 地球的GM值是 398600.4418, 圆周率为Math.PI*/
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  for(var i=0;i<arr.length;i++){
    var R=(arr[i].avgAlt+6367.4447);
    var T=R*2*Math.PI*Math.sqrt((R/GM));
    delete arr[i].avgAlt;
    arr[i].orbitalPeriod=Math.round(T);
  }
  
  console.log(arr);
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

//46,找到你的另一半

/*都说优秀的程序员擅长面向对象编程，但却经常找不到另一半，这是为什么呢？因为你总是把自己局限成为一个程序员，没有打开自己的思维。
这是一个社群的时代啊，在这里你应该找到与你有相同价值观但又互补的另一半。
譬如：你编程能力强，估值11分，如果以20分为最佳情侣来计算，你应该找一个设计能力强，估值为9分的女生。
那么当你遇到一个设计能力为9分的女生，千万别犹豫，大胆去表白。千万别以为后面的瓜比前面的甜哦。
举个例子：有一个能力数组[7,9,11,13,15]，按照最佳组合值为20来计算，只有7+13和9+11两种组合。而7在数组的索引为0，13在数组的索引为3，9在数组的索引为1，11在数组的索引为2。
所以我们说函数：pairwise([7,9,11,13,15],20) 的返回值应该是0+3+1+2的和，即6。
我们可以通过表格来更直观地查看数组中索引和值的关系：

Index	0	1	2	3	4
Value	7	9	11	13	15
*/

function pairwise(arr, arg) {
  var arr2=arr;
  var count=0;

  for(var j=0;j<arr.length;j++){
    for(var i=j+1;i<arr2.length;i++){
        if(arr[j]+arr2[i]==arg){
          count+=i+j;
          arr[i]="false";
          arr[j]="false";
        }      
    }
  }
    console.log(count);
    return count;  
}

pairwise([1,4,2,3,0,5], 7);

//算法结束