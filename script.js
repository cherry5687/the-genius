let input = prompt().split("");

var a = [];

//input 배열의 길이만큼 반복문 돌리고 배열 a에 담기
for (var i = 0; i < input.length; i++) {
  a.push(input[i]);
}

//만약 배열의 값이 공백 ' '이라면 인덱스 삭제-> 배열의 길이가 줄어들기 때문에 j-=1 해주기
for (var j = 0; j < a.length; j++) {
  if (a[j] === " ") {
    a.splice(j, 1);
    j--;
  }
}

//배열 a는 문자열이므로 숫자형으로 형변환
var a = a.map(function (item) {
  return parseInt(item, 10);
});

//나온 숫자 순서대로 담을 배열
var qq = [];

//각 숫자 개수를 담을 배열
var count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

//중복숫자 제거하면서 숫자 나온 순서대로 배열에 삽입
for (var i = 0; i < a.length; i++) {
  for (var j = 0; j < 10; j++) {
    if (a[i] == j) {
      if (qq.indexOf(j) == -1) {
        qq.push(j);
      }
    }
  }
}

//각 숫자의 개수만큼 자리수에 카운트 증가
for (var h = 0; h < a.length; h++) {
  for (var k = 0; k < 10; k++) {
    if (a[h] == k) {
      count[k] += 1;
    }
  }
}

var v = [];

for (var m = 0; m < qq.length; m++) {
  for (var n = 0; n < 10; n++) {
    if (qq[m] == n) {
      v.push(count[n]);
    }
  }
}

result = "";

for (var x = 0; x < qq.length; x++) {
  result += `${qq[x]}${v[x]}`;
}

console.log(a); //입력 숫자
console.log(qq); //숫자 나온 순서
console.log(count); //각 숫자 개수
console.log(v); //숫자 나온 순서의 숫자 개수....ㅋㅋㅋ
console.log(result); //결과
