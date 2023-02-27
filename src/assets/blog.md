## 텍스트 서식 태그
b 태그 : 볼드체 표시(단순히 굵게 표현)
strong 태그 : 볼드체 표시**(중요한 의미포함)**

i 태그 : 이탤릭체로 표시(단순한 이탤릭)
em 태그 : 이탤릭체로 표시**(강조 의미포함)**

mark 태그 : 하이라이트 표시

q 태그 : 인용 내용 표시(따옴표 사용, 줄 바꿈 없음)
blockquote : 인용 내용 표시(줄 바꿈, 인용내용을 안으로 들임)

del 태그 : 중간에 가로줄

ins 태그 : 글밑에 가로줄

sup 태그 : 위첨자
sub 태그 : 아래첨자

### 특수문자
```
&nbsp : 공백
&lt : <
&gt : >
&amp : &
&quot : "
```

### 이미지 태그, 링크태그
#### HTML 스타일
<태그 이름 style="속성이름:속성값">

#### 이미지 태그
```
<img src="이미지주소" alt="대체문자열">
```

#### 링크 연결
```
<a href="링크주소">내용~~~~<a>
```

### 리스트 태그
  
ul, li 태그 : 번호 없는 리스트
  
ol, li 태그 : 번호있음
  ```
type="A" //영어 대문자
type="a" //영어 소문자
type="I" //로마 대문자
type="i" //로마 소문자
  
  
<ol type="A" start="10">
    <li>녹차</li>
    <li>홍차</li>
    <li>자스민차</li>
</ol>
```
  
## 표
   table 태그: 표 작성
   caption 태그 : 표 이름
   th 태그 : 각 행 또는 열의 제목
   tr 태그 : 행 (가로)
   td 태그 : 열 (세로)
   colspan : 열 합치기
   rowspan : 행 합치기
   
   예시
```
   <table border="1px solid">
    <tr>
        <th>종류</th>
        <th>면류</th>
        <th>분식류</th>
    </tr>
    <tr>
        <td rowspan="2">구분</td>
        <td>우동</td>
        <td>순대</td>        
    </tr>
    <tr>
		<td>짬뽕</td>
        <td>떡볶이</td>        
    </tr>
   </table>
```
결과

<img style="width:330px;" src="https://velog.velcdn.com/images/kbk282655/post/7ad418de-dc37-4182-b551-840a84e47ac1/image.png">



## 멀티미디어 입력 태그
#### 오디오 태그
```
<audio src="이미지 주소" alt="대체문자열" controls>
```
<img style="width:550px;" src="https://velog.velcdn.com/images/kbk282655/post/5008ccf0-cf4d-482d-9ffb-ddbc43ae6fc8/image.png">

```
<video src="비디어 주소" alt="대체문자열" controls>
```
<img style="width:550px;" src="https://velog.velcdn.com/images/kbk282655/post/376ad9f8-a200-4cf0-9cdc-9fea582810a5/image.png">

```
 <source src="/examples/media/sample_audio_ogg.ogg" type="audio/ogg">
```
<img style="width:550px;" src="https://velog.velcdn.com/images/kbk282655/post/a3ddaf0e-4c5b-488b-9bba-e646267bf121/image.png">

## 블록태그, 인라인태그
<img style="width:550px;" src="https://velog.velcdn.com/images/kbk282655/post/49bb31dc-0f19-4105-911b-f6df4f3229f0/image.png">

예시

<img style="width:550px;" src="https://velog.velcdn.com/images/kbk282655/post/a0f33de4-09aa-483e-bbee-9f6a2e62df50/image.png">

## 시멘틱 웹(블록태그)
```
<header> : 페이지나 섹션의 머리말 표현 페이지 제목, 페이지를 소개하는 간단한 설명

<nav> :하이퍼링크들을 모아 놓은 특별한 섹션 페이지 내 목차를 만드는 용도

<section>문서의 장(chapter, section) 혹은 절을 구성하는 역할로 여러 <section>

<article> : 본문과 연관 있지만, 독립적인 콘텐트를 담는 영역 혹은 보조 기사, 
블로그 포스트, 댓글 등 기타 독립적인 내용

<aside> : 본문에서 약간 벗어난 노트나 팁 신문, 잡지에서 주요 기사 옆
관련 기사, 삽입 어구로 표시된 논평 등 페이지의 오른쪽이나 왼쪽에 주로 
배치

<footer>: 꼬리말 영역, 주로 저자나 저작권 정보
```

## 폼태그, 인풋태그
  ```
<form action="처리할페이지주소" method="GET | POST"></form>
```
action 속성 :  데이터를 처리할 서버 상의 스크립트 파일주소
전달받은 데이터를 처리하는 스크립트 파일을 폼 핸들러(form-handler)라고 함.

method 속성 : 입력받은 데이터를 서버에 전달할 방식 지정(get | post)
	
    - GET: 주소에 데이터(data)를 추가하여 전달하는 방식.
	  데이터가 주소 입력창에 그대로 나타나며, 전송 데이터의 
      크기 또한 제한적(4,096byte)  

    - POST :  데이터(data)를 별도로 첨부하여 전달하는 방식.
	 데이터가 드러나지 않으며,데이터의 크기 또한 제한이 없음. 
     보안 및 활용성이 뛰어남.

```
폼요소 그룹화 : <fieldset>

필드셋 제목 : <legend>

입력필드 삽입: <input>

라벨 입력 : <label> 

드롭다운 목록삽입 : <select>,  <option>

텍스트영역 삽입: <textarea>
예 : <textarea  id="memo" cols="40" rows="4"></textarea>
```
    
```
<input type="text"> : 문자 타입 데이터 입력
<input type="password"> : 문자 비밀번호 데이터 입력
```
<img style="width:1050px; height:505px;" src="https://velog.velcdn.com/images/kbk282655/post/34f50255-d5f3-4d45-947b-c5e2de45506d/image.png">
라디오나 체크박스는 네임이 똑같아야함

라디오는 하나만 선택

체크박스는 다중 선택 가능

#### input 요소 타입(type) 종류

 1) 파일 선택(file)
 2) 전화번호(tel)
 3) 이메일(email)  
 4) 날짜(date), 달(month), 주(week),시간(time) : 달력 아이콘 표시
 5)  버튼 입력(button)
 6) 전송 버튼(submit)
 7) 숫자막대(range)
 8) 검색(search)
 9) 주소(url)
 10) 취소(reset)
 11) 버튼이미지(image)
 12) 히든(hidden): 사용자는 안보이지만 서버로 넘기는 필드 생성
 
 
#### input 태그 속성

 1) autofocus : 입력필드에 마우스커서 표시
 2) placeholder : 텍스트필드에 힌트 표시
 3) readonly : 읽기 전용 지정
 4) required : 필수 입력 지정
 5) max, min : 숫자 입력 필드에서 최대, 최소값 지정
 6) maxlength, minlength : 텍스트필드에서 입력가능 최대값, 최소값 지정
 7) step : 숫자 필드에서 증감 간격 지정
 8) size : 텍스트필드에서 화면에 표시할 크기 지정
 9) list : 연결할 데이터 목록 지정

  
  
 

## 기타 태그 - 수평선, 문단 나눔(줄바꿈),
```
<hr> : 수평선
<p></p> : 문단 나눔(줄바꿈)
```
  
  
  
