/*
	* 데이터베이스의 테이블은 행과 열을 이용하여 데이터를 저장하는 시스템이다.
    
    SQL(Structured Query Language): 데이터 베이스에서 사용하는 구조화된 언어 
	--> DBMS(DataBase Management System)에 접속하여 CRUD 작업을 수행하는 언어
	
    (1) DDL(Data Definition Language) : 데이터 정의어
		- 데이터를 저장하기 위한 공간을 생성하고 관리하는 논리적인 언어
		- CREATE, ALTER, TRUNCATE, DROP
	(2) DML(Data Manipulation Language) : 데이터 조작어
		- 데이터를 CRUD 작업을 수행하는 언어
        - insert(C), select(R), update(U), delete(D)
	(3) DCL(Data Control Language) : 데이터 제어어
		- 데이터에 접근하는 권한을 제어하는 언어
        - GRANT(부여), DEVOKE(해제)
	(4) DTL(Data Transaction Language) : 트랜잭션 제어어
		- 데이터베이스 작업 처리 단위인 트랜잭션을 관리하는 언어
        - commit(완료), rollback(취소), savepoint(작업구간별 저장) ..
*/

/**
	데이터베이스 선택 및 조회
    show databases;			-- 모든 데이터베이스 목록 출력
    use [선택한 데이터베이스명]; -- 사용할 데이터베이스 선택
    select database()  		-- 데이터베이스 선택
    show tables;			-- 데이터베이스에 저장된 테이블 전체 조회
*/
show databases;
use hrdb2019;
select database();
show tables;

/**
	테이블 구조 확인 : DESC(DESCRIBE)
    형식 - DESC [테이블명];
*/
SHOW TABLES;
DESC DEPARTMENT;
DESC EMPLOYEE;
DESC UNIT;
DESC VACATION;

/**
	테이블 조회(단순) : SELECT
    형식 - SELECT [컬럼리스트] FROM [테이블명];
		  SELECT [*(전체컬럼리스트)] FROM [테이블명];
*/
SHOW TABLES;
DESC EMPLOYEE;
SELECT EMP_ID, EMP_NAME FROM EMPLOYEE;
SELECT * FROM EMPLOYEE;
SELECT * FROM DEPARTMENT;

SHOW TABLES;
DESC EMPLOYEE;
-- 사원테이블에서 사원아이디, 사원명, 성별, 입사일 조회
SELECT EMP_ID, EMP_NAME, GENDER, HIRE_DATE
FROM EMPLOYEE;

-- 사원테이블에서 사원명, 부서명, 입사일, 폰번호, 연봉 조회
DESC EMPLOYEE;
SELECT EMP_NAME, DEPT_ID, HIRE_DATE, PHONE, SALARY
	FROM EMPLOYEE;

-- 부서테이블의 모든 컬럼을 조회
SELECT * FROM DEPARTMENT;

-- [조회한 컬럼명을 ALIAS(별칭)으로 출력]
-- 형식 : SELECT [컬럼명 AS '별칭', 컬럼명 AS '별칭'...] FROM [테이블명];
-- 사원테이블에서 아이디, 성명, 입사일, 부서명, 연봉 이름으로 컬럼을 조회
SELECT 
	EMP_ID AS '아이디',
    EMP_NAME AS '성명',
    HIRE_DATE AS '입사일',
    DEPT_ID AS '부서명',
    SALARY AS '연봉'
	FROM EMPLOYEE;
    
SELECT 
	EMP_ID '사원 아이디',
    EMP_NAME 성명,
    HIRE_DATE 입사일,
    DEPT_ID 부서명,
    SALARY 연봉
	FROM EMPLOYEE;
    
-- 사원테이블에서 사원명, 부서, 연봉을 조회
-- 별칭으로 컬럼명을 수정
-- 기존 컬럼을 이용하여 가상컬럼 생성 - 연봉 10% 인센티브 컬럼, 물리적x
-- 타입이 숫자인 컬럼은 수식 연산이 가능함
DESC EMPLOYEE;
SELECT EMP_NAME 사원명, DEPT_ID 부서, SALARY 연봉, SALARY*0.1 인센티브
	FROM EMPLOYEE;

-- 현재의 날짜를 조회, 컬럼명을 'DATE'로 변경
SELECT CURDATE();
SELECT CURDATE() AS 'DATE';

/**
	테이블 조회(단순) : SELECT ~ FROM ~ WHERE 
    - 조건절을 추가하여 다양한 쿼리를 실행
    형식 - SELECT [컬럼리스트, *] 
			FROM [테이블명]
            WHERE [조건절];
*/
-- 사원테이블에서 SYS 부서에 근무하는 모든 사원을 조회
SELECT * FROM EMPLOYEE
	WHERE DEPT_ID = 'SYS';

-- 사원 테이블에서 사원명이 '정주고'인 사원을 조회
SELECT *
	FROM EMPLOYEE
    WHERE EMP_NAME = '정주고';
    
-- 사원테이블에서 사원아이디가 S0011 인 사원의 정보를 모두 조회
SELECT *
	FROM EMPLOYEE
    WHERE EMP_ID = 'S0011';

-- 사원테이블에서 연봉이 5800인 사원의 모든 정보 조회
SELECT *
	FROM EMPLOYEE
	WHERE SALARY = 5800;
    
-- 사원테이블에서 여성사원들의 아이디, 이름, 입사일, 이메일 정보를 조회
SELECT	EMP_ID, EMP_NAME, HIRE_DATE, EMAIL
	FROM EMPLOYEE
    WHERE GENDER = 'F';

-- 사원테이블에서 부서명이 SYS인 사원들의 아이디, 사원명, 입사일을 조회
-- 출력되는 아이디 컬럼명을 '사원 번호' 별칭 사용   
SELECT EMP_ID '사원 번호', EMP_NAME, HIRE_DATE
	FROM EMPLOYEE
    WHERE DEPT_ID = 'SYS';
    
-- WHERE절 조건에 별칭으로 조회가 가능할까요???
SELECT EMP_ID '사원 번호', EMP_NAME, HIRE_DATE, DEPT_ID '부서 번호'
	FROM EMPLOYEE
    WHERE DEPT_ID = 'SYS';
    -- WHERE '부서 번호' = 'SYS'; 
    
-- 사원테이블에서 마케팅 부서의 모든 사원 정보를 조회
SELECT	*
	FROM EMPLOYEE
		WHERE DEPT_ID = 'MKT';

-- 사원테이블에서 입사일이 2014년 8월 1일인 모든 사원 조회
SELECT *
	FROM EMPLOYEE
		WHERE HIRE_DATE = '2014-08-01';  -- DATE 타입은 표현은 문자처럼, 처리는 숫자 

-- 연봉이 5000인 사원 정보 조회
SELECT *
	FROM EMPLOYEE
		WHERE SALARY = 5000;


-- NULL 타입?? :: 미지수
-- 숫자 컬럼에서는 가장 큰 숫자로 인식, 문자 컬럼에서는 작은 문자로 인식
-- NULL은 논리적인 의미를 가지므로 IS 키워드를 비교 연산을 수행

-- 사원테이블에서 ENG_NAME이 NULL인 모든 사원의 정보 조회
SELECT *
	FROM EMPLOYEE 
    WHERE ENG_NAME IS NULL;
    -- WHERE ENG_NAME = NULL;

-- 연봉이 정해지지 않은 모든 사원 조회       
SELECT *
	FROM EMPLOYEE
    WHERE SALARY IS NULL;

-- ifnull() : NULL 값을 다른 값은 대체해주는 함수
-- 형식 : ifnull(null포함 컬럼명, 대체할 값);
-- 컬럼리스트에서 호출
SELECT EMP_NAME, SALARY, IFNULL(SALARY, 0) AS SALARY2
	FROM EMPLOYEE;
    
-- ENG_NAME이 NULL인 사원들은 'SMITH' 이름으로 변경 후 조회
-- 출력되는 컬럼명은 ENG_NAME으로 변경
SELECT 
		EMP_ID,
        EMP_NAME,
        IFNULL(ENG_NAME, 'SMITH') AS 'ENG_NAME',
        HIRE_DATE
	FROM EMPLOYEE;

-- 모든 사원의 아이디, 사원명, 입사일, 퇴사일을 조회
-- 현재 근무중인 사원인 퇴사일에 현재의 날짜를 출력해주세요
SELECT
		EMP_ID,
        EMP_NAME,
        HIRE_DATE,
        IFNULL(RETIRE_DATE, CURDATE()) AS RETIRE_DATE
	FROM EMPLOYEE;

/**
	DISTINCT : 데이터 중복 배제, 중복된 데이터 하나만 출력
    형식 - SELECT [DISTINCT 컬럼리스트(중복데이터포함)] 
			FROM [테이블명]
            WHERE [조건절];
*/    
-- 사원테이블의 부서 컬럼을 조회
SELECT DISTINCT DEPT_ID
	FROM EMPLOYEE;

SELECT DISTINCT EMP_ID, DEPT_ID
	FROM EMPLOYEE;

/**
	ORDER BY : 데이터 정렬(오름차순, 내림차순)
    형식 : SELECT [컬럼리스트] 
			FROM ~
            WHERE ~
            ORDER BY  컬럼리스트 [ASC/DESC]
*/
-- 사원아이디, 사원명, 입사일, 연봉을 조회
-- 사원아이디 기준 오름차순으로 정렬
SELECT EMP_ID, EMP_NAME, HIRE_DATE, SALARY
	FROM EMPLOYEE
    ORDER BY EMP_ID DESC;
    
-- 사원아이디 기준 오름차순, 입사일 기준 내림차순
SELECT EMP_ID, EMP_NAME, HIRE_DATE, SALARY
	FROM EMPLOYEE
    ORDER BY EMP_ID ASC, HIRE_DATE DESC;

-- 급여를 기준으로 오름차순 정렬 후 조회
SELECT *
	FROM EMPLOYEE
    ORDER BY SALARY ASC;

-- ENG_NAME이 정해지지 않은 사원들을 최근 입사한 순서대로 조회
SELECT *
	FROM EMPLOYEE
    WHERE ENG_NAME IS NULL
    ORDER BY HIRE_DATE DESC;

-- 퇴직한 사원들을 급여가 높은 순으로 조회 
SELECT * 
	FROM EMPLOYEE
    WHERE RETIRE_DATE IS NOT NULL
    ORDER BY SALARY DESC;

-- 정보시스템 부서의 사원들 중 급여가 높은 순으로 조회
SELECT *
	FROM EMPLOYEE
    WHERE DEPT_ID = 'SYS'
    ORDER BY SALARY DESC;

-- 정보시스템 부서의 사원들 중 최근 입사일 기준, 급여가 낮은 순으로 조회  
SELECT *
	FROM EMPLOYEE
    WHERE DEPT_ID = 'SYS'
    ORDER BY HIRE_DATE DESC, SALARY ASC;

/**
	특정 범위의 데이터 검색 : WHERE [조건절 + 비교연산자] 
    형식 - SELECT [컬럼리스트]
			FROM [테이블명]
            WHERE 컬럼명 [비교연산자 조건절]
*/    
-- 사원중에서 연봉이 5000 이상인 사원들을 조회
SELECT *
	FROM EMPLOYEE
    WHERE SALARY >= 5000
    ORDER BY SALARY DESC;

-- 입사일이 '2016년 1월 1일' 이전에 입사한 사원들 조회   
-- DATE 타입은 표현은 문자처럼, 처리방식은 숫자처럼
SELECT *
	FROM EMPLOYEE
    WHERE HIRE_DATE <= '2016-01-01';

-- 입사일이 2015년 1월 1일 이후이고, 급여가 6000 이상인 사원들을 조회    
-- AND(~이고) : 두 개의 조건이 모두 만족한 데이터만 조회
 SELECT *
	FROM EMPLOYEE
    WHERE HIRE_DATE >= '2015-01-01'
			AND SALARY >= 6000 ;

-- 입사일이 2015년 1월 1일 이후이거나 또는, 급여가 6000 이상인 사원들을 조회    
-- OR(~또는) : 두 개의 조건 중 하나만 만족해도 데이터 조회
 SELECT *
	FROM EMPLOYEE
    WHERE HIRE_DATE >= '2015-01-01'
			OR SALARY >= 6000 ;

-- 입사일이 2015년 1월 1일 부터 2017년 12월 31일 사이에 입사한 사원들을 모두 조회
SELECT *
	FROM EMPLOYEE
    WHERE HIRE_DATE >= '2015-01-01' 
			AND  HIRE_DATE <= '2017-12-31';

-- 연봉 구간이 5000 이상 7000 미만의 사원들을 모두 조회
SELECT *
	FROM EMPLOYEE
    WHERE SALARY >= 5000 AND SALARY < 7000;
    
/**
	BETWEEN ~ AND : 특정 구간 조회시 사용 
    형식 - SELECT [컬럼리스트]
			FROM [테이블명]
            WHERE 컬럼명 BETWEEN [시작구간]  AND [종료구간] ;
*/
-- 2016년 입사자들을 조회
-- (2016-01-01 ~ 2016-12-31)
SELECT *
	FROM EMPLOYEE
	WHERE HIRE_DATE BETWEEN	'2016-01-01' AND '2016-12-31' ;

-- 사원 아이디가 S0001, S0010, S0020 인 사원의 모든 정보를 조회
SELECT *
	FROM EMPLOYEE
    WHERE EMP_ID = 'S0001' 
			OR EMP_ID = 'S0010' 
            OR EMP_ID = 'S0020' ;

-- 부서 아이디가 MKT, GEN, HRD 인 부서에 속한 모든 사원을 조회
SELECT *
	FROM EMPLOYEE
    WHERE DEPT_ID = 'MKT'
		OR DEPT_ID = 'GEN'
        OR DEPT_ID = 'HRD' ;

/**
	IN 연산자 : 한 컬럼에 추가되는 OR 연산식을 대체하는 IN 연산자
    형식 - SELECT [컬럼리스트]
			FROM [테이블명]
            WHERE 컬럼명 IN (조건1, 조건2, 조건3....) ;
*/
-- 사원 아이디가 S0001, S0010, S0020 인 사원의 모든 정보를 조회
SELECT *
	FROM EMPLOYEE
    WHERE EMP_ID IN ('S0001', 'S0010','S0020');

-- 부서 아이디가 MKT, GEN, HRD 인 부서에 속한 모든 사원을 조회  
SELECT *
		FROM EMPLOYEE
        WHERE DEPT_ID IN ('MKT','GEN','HRD');
  
/**
	와일드 카드 문자 : 특정 문자열 검색  + LIKE
    종류 : %(전체), _(한문자)
    사용법 : LIKE 연산자와 함께 조건식을 추가하여 사용됨
    형식 - SELECT [컬럼리스트]
			FROM [테이블명]
            WHERE 컬럼명 [와일드 카드 문자를 이용한 특정문자열 검색 조건]
*/
-- 영어 이름이 'f'로 시작하는 모든 사원들을 조회
SELECT *
	FROM EMPLOYEE
    WHERE ENG_NAME LIKE 'f%';    

-- '한'씨 성을 가진 모든 사원들을 조회
SELECT *
	FROM EMPLOYEE
    WHERE EMP_NAME LIKE '한%';

-- 이메일 주소 2번째 자리에 'a'가 들어가는 모든 사원을 조회
SELECT *
	FROM EMPLOYEE
    WHERE EMAIL LIKE '_a%';

-- 이메일 주소가 4자리인 모든 사원을 조회
SELECT *
	FROM EMPLOYEE
    WHERE EMAIL LIKE '____@%';

-- 이름에 '삼'이 들어가는 모든 사원을 조회
SELECT *
	FROM EMPLOYEE
    WHERE EMP_NAME LIKE '%삼%';


/***********************************************
	내장함수(Built-in) : 숫자, 문자, 날짜 함수
    - 함수 테스트를 위한 테이블 DUAL
    - SELECT [함수 실행] FROM DUAL;
***********************************************/
-- 1. 숫자 함수 : abs(), rand(), truc()...
-- (1) ABS 함수 : 절대값 표현 함수
SELECT 100, -100, ABS(100), ABS(-100)
	FROM DUAL;
    
-- (2) FLOOR 함수 : 소수점을 버리는(삭제) 함수   
--     TRUNCATE() : 소수점을 삭제하는 함수 - TURUNCATE(데이터, 자릿수)
SELECT 123.456, FLOOR(123.456) FROM DUAL;
SELECT 123.456, 
		TRUNCATE(123.456, 0) AS '소수점0', 
        TRUNCATE(123.456, 2) AS '소수점2'
	FROM DUAL;

-- (3) RAND 함수 : 임의의 수를 생성
SELECT  RAND(),
		RAND() * 1000,
        RAND() * 100000
	FROM DUAL;
 
 -- 정수만 출력하는 쿼리 실행
 SELECT FLOOR(RAND()) AS 'RAND1',
		TRUNCATE(RAND() * 1000, 0) RAND2,
        TRUNCATE(RAND() * 100000, 0) RAND3,
        TRUNCATE(RAND() * 100000, 2) RAND4
	FROM DUAL;

-- (4) MOD 함수 : 모듈러 연산을 실행하는 함수 - MOD(숫자데이터, 연산숫자)
SELECT MOD(100, 2) 짝수, MOD(101, 2) 홀수 FROM DUAL;

-- 1~3 자리의 정수를 생성하고, 생성한 정수를 2로 나누는 모듈러 함수를 실행하는 쿼리를 완성해주세요
SELECT MOD(TRUNCATE(RAND() * 1000, 0), 2) AS RESULT
	FROM DUAL;

-- 사원테이블에서 사원아이디, 사원명, 부서아이디, 입사일, 연봉, 인센티브(연봉 20%)를 조회
-- 인센티브의 소수점 생략
-- 연봉협상이 아직 진행되지 않은 사원은 모두 0으로 출력, 인센티브 포함
-- 5000 미만의 사원들 정보만 출력
SELECT  EMP_ID,
		EMP_NAME,
        DEPT_ID,
        HIRE_DATE,
        IFNULL(SALARY, 0) AS SALARY,
        IFNULL(TRUNCATE(SALARY * 0.2, 0), 0) AS INCENTIVE
	FROM EMPLOYEE
    WHERE SALARY < 5000 OR SALARY IS NULL;

-- 2. 문자 함수 : CONCAT(), SUBSTRING()...
-- (1) CONCAT(문자열, 문자열...) : 문자열 결합
SELECT CONCAT('MY', 'SQL', '-84') AS NAME
	FROM DUAL;

-- 사원테이블의 사원명과 영어이름을 결합하여 새로운 컬럼을 생성하고 컬럼명은 TEST_NAME으로 조회
-- 예시) 홍길동/HONG
-- 영어이름이 정해지지 않은 사원은 빈문자열로 치환해서 실행
SELECT  EMP_NAME, 
		ENG_NAME,
		CONCAT(EMP_NAME, '/', IFNULL(ENG_NAME, '')) AS TEST_NAME
	FROM EMPLOYEE;

-- 사원테이블의 사원아이디와 1~5자리 사이의 임의의 정수를 결합하여 사원번호라는 새로운 컬럼을
-- 생성하고 조회
-- 사원아이디, 사원번호, 사원명, 입사일, 급여, 퇴사일 컬럼리스트를 조회
-- 현재근무중인 사원은 현재 날짜를 출력
SELECT  EMP_ID,
		CONCAT(EMP_ID, '_', TRUNCATE(RAND() * 100000, 0))  EMP_NUMBER,
        EMP_NAME,
        HIRE_DATE, 
        SALARY,
        IFNULL(RETIRE_DATE, CURDATE()) RETIRE_DATE,
        IFNULL(RETIRE_DATE, NOW()) RETIRE_DATE
	FROM EMPLOYEE;
    
-- (2) SUBSTRING(문자열, 위치, 추출자릿수) : 문자열 추출 함수
SELECT  SUBSTRING('대한민국 홍길동 만세 1234!!', 1, 4) 대한민국,
		SUBSTRING('대한민국 홍길동 만세 1234!!', 6, 3) 홍길동,
        SUBSTRING('대한민국 홍길동 만세 1234!!', 10, 2) 만세,
        SUBSTRING('대한민국 홍길동 만세 1234!!', 17, 2) '!!'
	FROM DUAL;

-- 사원테이블에서 사원아이디, 사원명, 입사년도, 입사월, 입사일, 급여를 조회 
SELECT HIRE_DATE FROM EMPLOYEE;
SELECT  EMP_ID,
		EMP_NAME,
        SUBSTRING(HIRE_DATE, 1, 4) YEAR,
        SUBSTRING(HIRE_DATE, 6, 2) MONTH,
        SUBSTRING(HIRE_DATE, 9, 2) DAY,
        SALARY
	FROM EMPLOYEE;
    
--  2015년도 입사한 모든 사원들을 조회
SELECT *
	FROM EMPLOYEE
    WHERE SUBSTRING(HIRE_DATE, 1, 4) = '2015';

-- 2018년도에 정보시스템 부서에 입사한 모든 사원들을 조회
SELECT *
	FROM EMPLOYEE
    WHERE SUBSTRING(HIRE_DATE, 1, 4) = '2018'
		AND DEPT_ID = 'SYS';
        
-- (3) LEFT(문자열, 추출숫자), RIGHT(문자열, 추출숫자)        
SELECT  LEFT('대한민국 홍길동 만세 1234!!', 4) 대한민국,
		RIGHT('대한민국 홍길동 만세 1234!!', 2) '!!'
      FROM DUAL;

-- 2015년도에 입사한 모든 사원들을 조회
SELECT *
		FROM EMPLOYEE
        WHERE LEFT(HIRE_DATE, 4) = '2015';

-- 사원들의 폰번호 마지막 4자리를 조회
-- 사원명, 부서아이디, 입사년도, 폰번호(마지막 4자리) 조회        
SELECT  EMP_NAME,
		DEPT_ID,
        LEFT(HIRE_DATE, 4) HIRE_DATE,
        RIGHT(PHONE, 4) PHONE
	FROM EMPLOYEE;

-- (4) UPPER(대문자), LOWER(소문자)
SELECT * FROM EMPLOYEE
WHERE UPPER(DEPT_ID) = UPPER('sys');

-- 사원들의 영어이름과 이메일 주소를 모두 대문자로 조회
SELECT  EMP_ID,
		EMP_NAME,
        UPPER(ENG_NAME) ENG_NAME,
        UPPER(EMAIL) EMAIL
	FROM EMPLOYEE;

SELECT  EMP_ID,
		EMP_NAME,
        LOWER(ENG_NAME) ENG_NAME,
        LOWER(EMAIL) EMAIL
	FROM EMPLOYEE;  
    
-- (5) TRIM() : 공백 제거   
SELECT  TRIM('       MYSQL 84') AS TRIM1,
		TRIM('MYSQL 84                ') AS TRIM2,
        TRIM('          MYSQL      84        ') AS TRIM3
	FROM DUAL;
    
-- (6) FORMAT(문자열 또는 숫자, 소수점자리) : 문자열의 포맷 수정    
-- 숫자를 3자리씩 콤마로 구분하여 출력하는 포맷 생성
SELECT  FORMAT(123456, 0) FORMAT1, 
		FORMAT(123456, 2) FORMAT2 FROM DUAL;

-- 사원테이블의 사원아이디, 사원명, 입사일, 연봉을 조회
-- 연봉 협상 전인 사원은 0으로 변환 후 조회
-- 연봉은 3자리씩 콤마로 구분하여 출력
SELECT  EMP_ID,
		EMP_NAME,
        HIRE_DATE,
        CONCAT(FORMAT(IFNULL(SALARY, 0), 0) , '만원') SALARY
	FROM EMPLOYEE;

-- 사원아이디, 사원명, 부서아이디, 입사일, 연봉, 보너스(연봉의 0.05%) 컬럼들을 조회
-- 연봉과 보너스 컬럼은 3자리 콤마로 구분하여 출력 후 ' 만원' 추가
-- 보너스 컬럼은 소수점 1자리까지 출력
 SELECT EMP_ID,
		EMP_NAME,
        DEPT_ID,
        HIRE_DATE,
        FORMAT(IFNULL(SALARY,0), 0) SALARY,
        FORMAT(IFNULL(SALARY * 0.05, 0), 1) AS BONUS
	FROM EMPLOYEE;


-- 3. 날짜 함수 : CURDATE(), NOW(), SYSDATE()
-- (1) CURDATE() : 현재 시스템 날짜를 출력, 년월일 만 출력
SELECT CURDATE() FROM DUAL;

-- (2) NOW(), SYSDATE() : 현재 시스템 날짜를 출력, 년월일 시분초 출력
SELECT NOW(), SYSDATE() FROM DUAL;

-- 4. 형변환 함수 : CAST(), CONVERT()
-- CAST(변경데이터 AS 데이터타입)
SELECT 12345 숫자, CAST(12345 AS CHAR) 문자  FROM DUAL;
SELECT '12345' 문자, CAST('12345' AS UNSIGNED INTEGER) 정수 FROM DUAL;

-- 입력폼에서 '20150101' 데이터 날짜를 가진 사원을 조회
SELECT *
	FROM EMPLOYEE
    WHERE HIRE_DATE = CAST('20150101' AS DATE);

-- FLOOR 함수를 적용한 CAST 함수
SELECT  FLOOR('12-34-5') 문자, 
		FLOOR(CAST('12-34-5' AS UNSIGNED INTEGER)) 정수
	FROM DUAL;   
    
-- 5. 문자열 치환 함수 : REPLACE(문자열, OLD, NEW)
SELECT  '123,456' 문자,
		REPLACE('123,456', ',', '') 문자,
        CAST(REPLACE('123,456', ',', '') AS UNSIGNED INTEGER) 숫자
	FROM DUAL;

-- 사원테이블의 입사일 포맷을 변경 '2015-01-01' --> '2015/01/01'
SELECT  EMP_NAME,
		HIRE_DATE,
        REPLACE(HIRE_DATE, '-', '/') HIRE_DATE
	FROM EMPLOYEE;


/***********************************************
	그룹(집계)함수 : SUM(), AVG(), MIN(), MAX(), COUNT()...
    GROUP BY : 그룹함수를 적용하기 위해 일반컬럼을 그룹핑하는 단위
    HAVING : 그룹함수의 조건절을 적용하는 구문
***********************************************/
-- 1. SUM(숫자, 숫자컬럼)
-- 사원테이블에서 모든 사원의 연봉 총합을 조회
-- 3자리 구분, '만원' 단위 추가
SELECT  SUM(SALARY) 총연봉,
		CONCAT(FORMAT(SUM(SALARY), 0), ' 만원') 총연봉
	FROM EMPLOYEE;
    
-- 2. AVG(숫자, 숫자컬럼)   
-- 사원들의 총연봉, 평균연봉 조회
-- 3자리 구분, '만원' 단위 추가
-- 소수점 1자리까지 유지
SELECT  CONCAT(FORMAT(SUM(SALARY), 1), ' 만원') 총연봉,
		CONCAT(FORMAT(AVG(SALARY), 1), ' 만원') 평균연봉
	FROM EMPLOYEE;
    
-- 3. MIN(숫자, 숫자컬럼) 
-- 가장 작은 값을 출력
-- 사원들의 총연봉, 평균 연봉, 최소연봉을 출력
-- 3자리 구분, 만원 추가, 소수점자리 생략
SELECT  CONCAT(FORMAT(SUM(SALARY), 0), '만원') 총연봉,
		CONCAT(FORMAT(AVG(SALARY), 0), '만원') 평균연봉,
        CONCAT(FORMAT(MIN(SALARY), 0), '만원') 최소연봉
	FROM EMPLOYEE;

-- 4. MAX(숫자, 숫자컬럼) 
-- 가장 큰 값을 출력
-- 사원들의 총연봉, 평균 연봉, 최소연봉, 최대연봉을 출력
-- 3자리 구분, 만원 추가, 소수점자리 생략
SELECT  CONCAT(FORMAT(SUM(SALARY), 0), '만원') 총연봉,
		CONCAT(FORMAT(AVG(SALARY), 0), '만원') 평균연봉,
        CONCAT(FORMAT(MIN(SALARY), 0), '만원') 최소연봉,
        CONCAT(FORMAT(MAX(SALARY), 0), '만원') 최대연봉
	FROM EMPLOYEE;

-- 5. COUNT(컬럼명)
-- 테이블의 ROW COUNT를 출력
-- NULL을 포함한 데이터의 COUNT를 계산하지 x
SELECT  COUNT(*) 총사원수 ,
		COUNT(SALARY) 연봉협상완료사원수
    FROM EMPLOYEE;	-- 20
SELECT *
	FROM EMPLOYEE
    WHERE SALARY IS NULL;
    
-- 총사원수, 퇴직사원수, 재직사원수를 조회
-- 인원수 뒤에 '명' 단위 추가
SELECT  CONCAT(CAST(COUNT(*) AS CHAR), '명') 총사원수,
		CONCAT(COUNT(RETIRE_DATE), '명') 퇴직사원수,
        CONCAT(COUNT(*) - COUNT(RETIRE_DATE), '명') 재직사원수
	FROM EMPLOYEE;

-- 사원테이블에서 정보시스템 부서의 사원수를 조회
SELECT COUNT(*)
	FROM EMPLOYEE
    WHERE DEPT_ID = 'SYS';

-- 2015년도에 입사한 사원수를 조회
SELECT  COUNT(*) '2015입사자(명)',
		SUM(SALARY) 총연봉,
        AVG(SALARY) 평균연봉,
        MIN(SALARY) 최소연봉,
        MAX(SALARY) 최대연봉
	FROM EMPLOYEE
    WHERE LEFT(HIRE_DATE, 4) = '2015';

-- 가장 최근 입사자와 오래된 입사자의 입사일 조회    
SELECT  MAX(HIRE_DATE)  '최근 입사일',
		MIN(HIRE_DATE)  '최초 입사일'
	FROM EMPLOYEE;

-- HRD 부서 기준 최근 입사자와 오래된 입사자의 입사일 조회  
SELECT 	MIN(HIRE_DATE) 'HRD부서 최근입사일' , 
		MAX(HIRE_DATE) 'HRD부서 최초입사일'
	FROM EMPLOYEE
    WHERE DEPT_ID = 'HRD';

-- 마케팅부서 기준 가장 낮은 연봉과 높은 연봉을 조회 
SELECT  MIN(SALARY) 'MKT-최소연봉',
		MAX(SALARY) 'MKT-최대연봉'
	FROM EMPLOYEE
    WHERE DEPT_ID = 'MKT';

-- 6. GROUP BY ~ 적용 : ~~별 그룹함수를 적용해야 하는 경우
-- 사원테이블에서 부서별 사원수를 조회
-- GROUP BY에 사용된 일반컬럼은 그룹함수와 함께 조회가 가능
-- 형식 : SELECT [컬럼리스트]
-- 			FROM [테이블명]
--          GROUP BY [그룹핑할 컬럼명, ...]
SELECT DEPT_ID, COUNT(*) 부서별사원수	
	FROM EMPLOYEE
    GROUP BY DEPT_ID;
    
-- 입사년도별 총연봉, 평균연봉, 최저연봉, 최고연봉, 입사사원수를 조회
SELECT 	CONCAT(LEFT(HIRE_DATE, 4), '년도') 입사년도,
		CONCAT(FORMAT(SUM(SALARY), 0), '만원') 총연봉,
        TRUNCATE(AVG(SALARY), 0) 평균연봉,
        MIN(SALARY) 최저연봉,
        MAX(SALARY) 최고연봉,
        CONCAT(COUNT(*), '명') 사원수 
	FROM EMPLOYEE
    GROUP BY CONCAT(LEFT(HIRE_DATE, 4), '년도');

-- 부서별 총연봉, 평균연봉, 최저연봉, 최고연봉, 입사사원수를 조회
SELECT 	DEPT_ID 부서아이디,
		CONCAT(FORMAT(SUM(IFNULL(SALARY, 0)), 0), '만원') 총연봉,
        TRUNCATE(AVG(IFNULL(SALARY, 0)), 0) 평균연봉,
        MIN(IFNULL(SALARY, 0)) 최저연봉,
        MAX(IFNULL(SALARY, 0)) 최고연봉,
        CONCAT(COUNT(*), '명') 사원수 
	FROM EMPLOYEE
    GROUP BY DEPT_ID;

-- 7. HAVING 절 
-- GROUP BY를 통해 그룹핑한 결과에 조건절을 추가하는 구문
-- 부서별 평균 연봉을 조회
-- NULL값이 포함된 경우 0으로 변환
-- 소수점 자리는 절삭
-- 부서아이디 함께 출력
-- 부서 평균연봉이 6000 이상인 부서만 출력
-- 평균연봉 기준 오름차순으로 정렬
SELECT  DEPT_ID 부서ID,
		TRUNCATE(AVG(IFNULL(SALARY, 0)), 0) 평균연봉  -- 오라클 NVL(컬럼명, 값)
	FROM EMPLOYEE
    GROUP BY DEPT_ID
    HAVING 평균연봉 >= 6000  -- HAVING 절에서는 별칭컬럼명을 조건으로 사용가능함
	ORDER BY 평균연봉 ASC;

-- 입사년도 기준 총연봉, 평균연봉을 조회
-- 총연봉이 5000 이상인 사원들만 출력
-- NULL 값을 포함한 경우 0으로 초기화
SELECT  LEFT(HIRE_DATE,4) 입사년도,
		SUM(SALARY),
        AVG(SALARY)
	FROM EMPLOYEE
    GROUP BY LEFT(HIRE_DATE, 4)
    HAVING SUM(SALARY) >= 5000;
    
-- 부서별 남녀사원의 사원수를 조회
SELECT  DEPT_ID 부서ID,
		GENDER,
		COUNT(*) 사원수
	FROM EMPLOYEE
    GROUP BY DEPT_ID, GENDER;
    
-- 8. ROLLUP 함수 : REPORTING을 위한 함수
-- 형식 : SELECT [컬럼리스트]	FROM [테이블명]
-- 		 	WHERE [조건절]
-- 			GROUP BY [그룹핑 컬럼]	 WITH ROLLUP;	
-- 부서별 총연봉을 조회, 연봉이 정해지지 않는 부서는 포함하지 않음
SELECT  IF(GROUPING(DEPT_ID), '부서 총합계', IFNULL(DEPT_ID, '-')) 부서ID,
		CONCAT(FORMAT(SUM(SALARY), 0), ' 만원') 총연봉
	FROM EMPLOYEE
    WHERE SALARY IS NOT NULL
    GROUP BY DEPT_ID WITH ROLLUP;

-- 입사년도별 평균연봉을 조회
-- 연봉이 정해지지 않는 부서는 포함하지 않음
-- 평균연봉이 6000 이상되는 입사년도만 출력
-- 3자리 구분, '만원' 단위 추가
-- 리포팅 함수 ROLLUP 사용, '연도별 총합계' 컬럼명 추가
SELECT  IF(GROUPING(YEAR), '연도별평균연봉', IFNULL(YEAR, '-')) 연도별,
		CONCAT(FORMAT(AVG(SALARY), 0), '만원') 평균연봉
	FROM (SELECT  LEFT(HIRE_DATE, 4) YEAR,
					SALARY
			FROM EMPLOYEE) T
	WHERE SALARY  IS NOT NULL
    GROUP BY YEAR WITH ROLLUP ;
    
    
SHOW TABLES; 

-- 사원들의 휴가사용 내역을 조회
SELECT * FROM VACATION; 

-- 사원아이디별 휴가사용 횟수 조회
-- 총휴가사용일 기준으로 내림차순 정렬
SELECT  EMP_ID 사원아이디,
		COUNT(*) 휴가상신횟수,
        SUM(DURATION) 총휴가사용일
	FROM VACATION
    GROUP BY EMP_ID
    ORDER BY 총휴가사용일 DESC;
    
-- 2016 ~ 2017년도 사이에 사원아이디별 휴가사용 횟수 조회
-- 총휴가사용일 기준으로 내림차순 정렬
SELECT  IF(GROUPING(EMP_ID), '총휴가사용내역', IFNULL(EMP_ID, '-')) 사원ID,
		COUNT(*) 휴가상신횟수,
        SUM(DURATION) 총사용일수
	FROM VACATION
    WHERE LEFT(BEGIN_DATE, 4) BETWEEN 2016 AND 2017
    GROUP BY EMP_ID WITH ROLLUP
    ORDER BY 총사용일수;


/****************************************
	DDL : 테이블 생성, 수정, 삭제
    명령어 : CREATE, ALTER, DROP, TRUNCATE
****************************************/
-- 1. 테이블 생성 : CREATE
-- 형식 : CREATE TABLE [생성할 테이블명] (
-- 			컬럼명	데이터타입(크기) [제약사항],
-- 			...
-- 		)

SHOW DATABASES;
USE HRDB2019;
SELECT DATABASE();
SHOW TABLES;

-- TEST 테이블생성 및 제거
CREATE TABLE TEST(
	ID	CHAR(4)		NOT NULL
);
SHOW TABLES;
DESC TEST;
SELECT * FROM TEST;
DROP TABLE TEST;
SHOW TABLES;

-- DATA TYPE(데이터 타입) : 숫자, 문자, 날짜(시간)
-- (1) 숫자 데이터 타입
-- 1) 정수 : SMALLINT(2), INT(4), BIGINT(8)
-- 2) 실수 : FLOAT(4), DOUBLE(8) 
-- 3) 문자 : CHAR(크기:고정형), VARCHAR(크기:가변형)
--         예) NAME CHAR(20),  NAME  VARCHAR(20)
-- 4) 텍스트 : TEXT - 긴 문장을 저장하는 데이터 타입
-- 5) BLOB 타입 : BLOB - 큰 바이너리 타입의 데이터 저장
-- 6) 날짜 : DATE - 년,월,일, DATETIME - 년,월,일,시,분,초
--          데이터타입에 맞는 날짜 함수 호출필요!!

DESC EMPLOYEE;
SELECT * FROM EMPLOYEE;

-- EMP 테이블 생성
-- 컬럼리스트 : EMP_ID 고정형(4), EMP_NAME 가변형(10), HIRE_DATE 날짜/시간, SALARY 정수(5)
CREATE TABLE EMP(
	EMP_ID		CHAR(4),
    EMP_NAME	VARCHAR(10),
    HIRE_DATE	DATETIME,
    SALARY		INT(5)
);
SHOW TABLES;
DESC EMP;

DESC DEPARTMENT;
-- DEPT 테이블 생성 : DEPT_ID	고정형(3), DEPT_NAME	가변형(10),  LOC	가변형(20)
CREATE TABLE DEPT(
	DEPT_ID			CHAR(3),
	DEPT_NAME		VARCHAR(10),
    LOC				VARCHAR(20)
);
SHOW TABLES;
DESC DEPT;

-- EMP, DEPT 테이블의 모든 데이터 조회
SELECT * FROM EMP;
SELECT * FROM DEPT;

-- 2. 테이블 생성(복제) : CREATE TABLE ~ AS ~ SELECT 
-- 물리적으로 메모리 생성
-- 기본키, 참조키 등의 제약사항은 복제가 불가능, 복제 후 ALTER TABLE 명령으로 제약사항 추가
/* 형식 : CREATE TABLE [생성(복제)할 테이블명] 
		 AS
         SELECT [컬럼리스트] 
			FROM [테이블명]
            WHERE [조건절]
*/
-- 정보시스템 부서의 사원들만 별도로 테이블 복제 
-- EMPLOYEE_SYS
CREATE TABLE EMPLOYEE_SYS
AS
SELECT *
	FROM EMPLOYEE
    WHERE DEPT_ID = 'SYS';
SHOW TABLES;
SELECT * FROM EMPLOYEE_SYS;
DESC EMPLOYEE_SYS; 
DESC EMPLOYEE;

-- 퇴직한 사원들을 복제하여 EMPLOYEE_RETIRE 테이블로 관리
CREATE TABLE EMPLOYEE_RETIRE
AS
SELECT * 
	FROM EMPLOYEE
    WHERE RETIRE_DATE IS NOT NULL;
SHOW TABLES;   
DESC EMPLOYEE_RETIRE;
SELECT * FROM EMPLOYEE_RETIRE; 

-- 2015년, 2017년 입사자들을 복제하여 별도로 관리
-- 테이블명 : EMPLOYEE_2015_2017
CREATE TABLE EMPLOYEE_2015_2017
AS
SELECT EMP_ID, EMP_NAME, HIRE_DATE, PHONE, SALARY
	FROM EMPLOYEE
    WHERE LEFT(HIRE_DATE, 4) IN ('2015', '2017');
SHOW TABLES;
SELECT * FROM EMPLOYEE_2015_2017;

SHOW TABLES;

/************************************
	테이블 제거 : DROP TABLE
    형식 : DROP TABLE [제거할 테이블명]
    명령 즉시 메모리에서 바로 테이블 삭제하므로 주의!!
    복구가 불가능
*************************************/
SHOW TABLES;
-- EMPLOYEE_2015_2017 테이블 제거
DROP TABLE EMPLOYEE_2015_2017;
SHOW TABLES;

-- EMPLOYEE_RETIRE 테이블 제거
SHOW TABLES;
DROP TABLE EMPLOYEE_RETIRE;

-- 재직중인 사원테이블 생성(복제)
-- EMPLOYEE_WORKING 
CREATE TABLE EMPLOYEE_WORKING
AS
SELECT *	
	FROM EMPLOYEE
    WHERE RETIRE_DATE IS NULL;

SHOW TABLES;
SELECT * FROM EMPLOYEE_WORKING;


/************************************
	테이블 데이터 제거 : TRUNCATE TABLE
    형식 : TRUNCATE TABLE [제거할 데이터를 가진 테이블명]
    명령 즉시 메모리에서 바로 테이블의 데이터 모두 제거되므로 주의!!
    복구가 불가능
*************************************/
SHOW TABLES;
SELECT * FROM EMPLOYEE_WORKING;
-- EMPLOYEE_WORING 테이블의 모든 데이터(ROW)를 제거
TRUNCATE TABLE EMPLOYEE_WORKING;
SHOW TABLES;
SELECT * FROM EMPLOYEE_WORKING;    

/************************************
	테이블 구조 변경 : ALTER TABLE
    형식 : ALTER TABLE [변경할 테이블명]
    1) 컬럼 추가 : ADD COLUMN [NEW 컬럼명 데이터타입(크기) 제약사항] 
    2) 컬럼 변경 : MODIFY COLUMN [변경할 컬럼명  데이터타입(크기) 제약사항]
    3) 컬럼 삭제 : DROP COLUMN [삭제할 컬럼명]
*************************************/
SHOW TABLES;
SELECT * FROM EMPLOYEE_WORKING;
DESC EMPLOYEE_WORKING;

-- EMPLOYEE_WORKING 테이블에 BOUNS 컬럼을 추가, 데이터타입 정수형 4자리, NULL값 허용
ALTER TABLE EMPLOYEE_WORKING
	ADD COLUMN BONUS 	INT(4);
DESC EMPLOYEE_WORKING;    

-- EMPLOYEE_WORKING 테이블에 DNAME(부서명) 추가, 데이터타입 가변형(10), 널값 허용
ALTER TABLE EMPLOYEE_WORKING
	ADD COLUMN 	DNAME	VARCHAR(10) ;
DESC EMPLOYEE_WORKING;    

-- EMPLOYEE_WORKING 이메일 주소 컬럼 크기를 30으로 수정
ALTER TABLE EMPLOYEE_WORKING
	MODIFY COLUMN EMAIL VARCHAR(30);
DESC EMPLOYEE_WORKING;  

-- EMPLOYEE_WORKING SALARY 컬럼을 실수타입(DOUBLE)로 수정
ALTER TABLE EMPLOYEE_WORKING
	MODIFY COLUMN SALARY DOUBLE;

SELECT COUNT(*) FROM EMPLOYEE_SYS;  -- 6
-- EMPLOYEE_SYS 테이블의 이메일주소 컬럼 크기를 가변형 10 크기로 수정
ALTER TABLE EMPLOYEE_SYS
	MODIFY COLUMN EMAIL	VARCHAR(10) ;  -- 1개의 데이터가 유실될 가능성이 있으므로 에러발생!!
DESC EMPLOYEE_SYS;

-- EMPLOYEE_WORKING 테이블의 BONUS 컬럼 삭제
DESC EMPLOYEE_WORKING;
ALTER TABLE EMPLOYEE_WORKING
	DROP COLUMN BONUS;

-- EMPLOYEE_WORKING 테이블의 EMAIL, DNAME 컬럼 삭제
ALTER TABLE EMPLOYEE_WORKING
	DROP COLUMN DNAME;
DESC EMPLOYEE_WORKING;    

-- EMPLOYEE_WORKING 테이블 제거
DROP TABLE EMPLOYEE_WORKING;
SHOW TABLES;

-- EMPLOYEE 테이블에서 HRD 부서에 속한 사원들의 사원아이디, 사원명, 입사일, 연봉, 보너스(연봉10%)
-- 정보를 별칭을 사용하여 조회한 후 
-- EMPLOYEE_HRD 이름으로 복제
CREATE TABLE EMPLOYEE_HRD
AS
SELECT  EMP_ID 사원아이디,
		EMP_NAME 사원명,
        HIRE_DATE 입사일,
        SALARY 연봉,
        SALARY*0.1 보너스
	FROM EMPLOYEE
    WHERE DEPT_ID = 'HRD';
SHOW TABLES; 
SELECT * FROM EMPLOYEE_HRD;  
DESC EMPLOYEE_HRD; 

/********************************************************
	DML : INSERT(C), SELECT(R), UPDATE(U), DELETE(D) 
*********************************************************/
-- 1. INSERT : 데이터 추가
-- 형식 : INSERT INTO [테이블명](컬럼리스트)
-- 			VALUES(데이터리스트....);
SHOW TABLES;
DESC EMP;
SELECT * FROM EMP;
-- S001, 홍길동, 현재날짜, 1000 데이터 추가
INSERT INTO EMP(EMP_ID, EMP_NAME, HIRE_DATE, SALARY)
	VALUES('S001', '홍길동', CURDATE(), 1000);
SELECT * FROM EMP;  
  
-- S002, 홍길순, 현재날짜(NOW, SYSDATE), 2000 데이터 추가
DESC EMP;
INSERT INTO EMP(SALARY, HIRE_DATE, EMP_NAME, EMP_ID) 
		VALUES(2000, NOW(), '홍길순', 'S002');
SELECT * FROM EMP;   
     
-- S003, 김철수, 현재날짜(NOW, SYSDATE), 3000 데이터 추가     
-- 컬럼리스트 생략시에는 생성시 컬럼순서대로 INSERT 실행됨
DESC EMP;
INSERT INTO EMP
	VALUES('S003', '김철수', SYSDATE(), 3000);
SELECT * FROM EMP;   

-- S004, 이영희, 현재날짜(NOW, SYSDATE), 연봉협상전 데이터 추가
DESC EMP; 
INSERT INTO EMP(EMP_ID, EMP_NAME, HIRE_DATE, SALARY)
	VALUES('S004', '이영희', NOW(), NULL);
SELECT * FROM EMP;  

DESC EMP;
INSERT INTO EMP(EMP_ID, EMP_NAME, HIRE_DATE, SALARY)
	VALUES(NULL, '홍길동', NOW(), NULL);
SELECT * FROM EMP;   

-- EMPLOYEE 테이블의 정보시스템 부서의 사원들 정보 중
-- 사원아이디, 사원명, 입사일, 부서아이디, 연봉
-- 2016년 이전에 입사한 사원들
-- 복제하여 EMPLOYEE_SYS 테이블 생성
DROP TABLE EMPLOYEE_SYS;
SHOW TABLES;
CREATE TABLE EMPLOYEE_SYS
AS
SELECT EMP_ID, EMP_NAME, HIRE_DATE, DEPT_ID, SALARY
	FROM EMPLOYEE
    WHERE DEPT_ID = 'SYS' AND LEFT(HIRE_DATE, 4) < '2016';

SELECT * FROM EMPLOYEE_SYS;
SELECT * FROM EMPLOYEE WHERE DEPT_ID = 'SYS';  

-- EMPLOYEE_SYS 테이블에 2016년도 이후에 입사한 정보시스템 부서 사원 추가
DESC EMPLOYEE_SYS;

-- 서브쿼리를 이용한 데이터 추가
INSERT INTO EMPLOYEE_SYS(EMP_ID, EMP_NAME, HIRE_DATE, DEPT_ID, SALARY)
SELECT EMP_ID, EMP_NAME, HIRE_DATE, DEPT_ID, SALARY
	FROM EMPLOYEE
    WHERE DEPT_ID ='SYS' AND LEFT(HIRE_DATE,4) >= '2016';
SELECT * FROM EMPLOYEE_SYS;   

-- DEPT 테이블 구조 확인 및 데이터 추가
SHOW TABLES;
DESC DEPT;
-- SYS, 정보시스템, 서울
-- MKT, 마케팅, 뉴욕
-- HRD, 인사, 부산
-- ACC, 회계, 정해지지않음
INSERT INTO DEPT(DEPT_ID, DEPT_NAME, LOC)
	VALUES('SYS', '정보시스템', '서울');
SELECT * FROM DEPT;   
INSERT INTO DEPT(DEPT_ID, DEPT_NAME, LOC)	VALUES('MKT', '마케팅', '뉴욕');
INSERT INTO DEPT(DEPT_ID, DEPT_NAME, LOC)	VALUES('HRD', '인사', '부산');    
INSERT INTO DEPT(DEPT_ID, DEPT_NAME, LOC)	VALUES('ACC', '회계', NULL);   
SELECT * FROM DEPT;
DESC DEPT;
INSERT INTO DEPT VALUES('영업', NULL, 'SALES');
SELECT * FROM DEPT;

-- 에러발생!! - 컬럼리스트와 매칭 카운트가 다름
INSERT INTO DEPT(DEPT_NAME, LOC) VALUES('영업', NULL, 'SALES');

-- 에러발생!! - 컬럼리스트 DEPT_ID 컬럼 사이즈보다 큰 데이터 입력
INSERT INTO DEPT(DEPT_NAME, LOC, DEPT_ID) VALUES('영업', NULL, 'SALES');
INSERT INTO DEPT(DEPT_NAME, LOC, DEPT_ID) VALUES('영업', NULL, 'SAL'); 
SELECT * FROM DEPT;
DESC DEPT;

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		CONSTRAINT(제약사항) : 데이터 무결성의 원칙을 적용하기 위한 규칙
        - UNIQUE : 유니크(중복방지) 제약
        - NOT NULL : NULL 값을 허용하지 않는 제약
        - PRIMARY KEY(기본키) : UNIQUE + NOT NULL 제약을 지정
        - FOREIGN KEY(참조키) : 타 테이블을 참조하기 위한 제약
        - DEFAULT : 디폴트로 저장되는 데이터 정의하는 제약
        
        사용 형식 :   CREATE TABLE + 제약사항 
					ALTER TABLE + 제약사항
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
-- DB의 스키마 구조를 통해 각 테이블의 제약사항 확인
-- INFORMATION_SCHEMA.TABLE_CONSTRAINTS
SELECT * FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS
		WHERE TABLE_NAME = 'EMPLOYEE';
DESC EMPLOYEE;   
SHOW TABLES;    
DESC EMP;

-- EMP_COST 테이블 생성
-- 기본키 제약 : EMP_ID  
-- 유니크 제약 : EMP_NAME
-- NOT NULL 제약 : SALARY
CREATE TABLE EMP_CONST(
	EMP_ID		CHAR(4)		PRIMARY KEY,
    EMP_NAME	VARCHAR(10)	UNIQUE,
    HIRE_DATE	DATETIME,
    SALARY		INT		NOT NULL
);
SHOW TABLES;
DESC EMP_CONST;
SELECT * 
	FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS
    WHERE TABLE_NAME = 'EMP_CONST';

-- EMP_CONST : S001, 홍길동, 현재날짜, 1000 데이터 추가 
INSERT INTO EMP_CONST(EMP_ID, EMP_NAME, HIRE_DATE, SALARY)	
	VALUES('S001', '홍길동', NOW(), 1000);
SELECT * FROM EMP_CONST;   

-- EMP_CONST : S001, 김철수, 현재날짜, 1000 데이터 추가  
-- Error Code: 1062. Duplicate entry 'S001' for key 'emp_const.PRIMARY'	
-- PRIMARY 키로 설정되어 있는 컬럼은 입력폼에서 아이디 중복체크 기능을 통해 확인함!!
INSERT INTO EMP_CONST(EMP_ID, EMP_NAME, HIRE_DATE, SALARY)	
	VALUES('S001', '김철수', NOW(), 1000);
    
-- SOLUTION : 중복된 'S001'  --> 'S002' 변경 후 실행
INSERT INTO EMP_CONST(EMP_ID, EMP_NAME, HIRE_DATE, SALARY)	
	VALUES('S002', '김철수', NOW(), 1000);    
SELECT * FROM EMP_CONST;

-- Error Code: 1048. Column 'EMP_ID' cannot be null	0.000 sec
-- SOLUTION : NULL 또는 중복된 값을 배제하여 진행
-- Error Code: 1062. Duplicate entry '김철수' for key 'emp_const.EMP_NAME'	
-- SOLUTION : 이미 저장된 '김철수' 대신 유니크한 이름으로 진행
INSERT INTO EMP_CONST(EMP_ID, EMP_NAME, HIRE_DATE, SALARY)	
	VALUES('S003', '이영희', NOW(), 1000);  
    
-- EMP_NAME 컬럼에 널값을 추가
INSERT INTO EMP_CONST(EMP_ID, EMP_NAME, HIRE_DATE, SALARY)	
	VALUES('S004', NULL, NOW(), 1000); 

-- EMP_NAME 컬럼에 널값은 중복으로 저장 가능    
INSERT INTO EMP_CONST(EMP_ID, EMP_NAME, HIRE_DATE, SALARY)	
	VALUES('S005', NULL, NOW(), 1000); 

DESC EMP_CONST;  
-- Error Code: 1048. Column 'SALARY' cannot be null	0.000 sec
INSERT INTO EMP_CONST(EMP_ID, EMP_NAME, HIRE_DATE, SALARY)	
	VALUES('S006', '스미스', NOW(), NULL);  
    
INSERT INTO EMP_CONST(EMP_ID, EMP_NAME, HIRE_DATE, SALARY)	
	VALUES('S006', '스미스', NOW(), 3000);      

SELECT * FROM EMP_CONST;  

SELECT *
	FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS
    WHERE TABLE_NAME = 'EMP_CONST';

-- EMP_CONST2 테이블 생성
-- EMP_ID : PRIMARY KEY
-- EMP_NAME : UNIQUE
CREATE TABLE EMP_CONST2(
	EMP_ID		CHAR(4),
    EMP_NAME	VARCHAR(10),
	CONSTRAINT PK_EMP_ID 	PRIMARY KEY(EMP_ID),
	CONSTRAINT UK_EMP_NAME	UNIQUE(EMP_NAME)
);    
DESC EMP_CONST2;
SELECT *
	FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS
    WHERE TABLE_NAME = 'EMP_CONST2';








    





