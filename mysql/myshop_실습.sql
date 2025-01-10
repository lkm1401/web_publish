show databases;
use myshop2019;
select database();
show tables;

/*
	실습 데이터베이스 연결 : myshop2019
	실습 내용 - 기본적인 데이터 조회 
*/
-- Q01) customer 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
-- Q02) employee 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
-- Q03) product 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
-- Q04) order_header 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
-- Q05) order_detail 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
-- Q06) 모든 고객의 아이디, 이름, 지역, 성별, 이메일, 전화번호를 조회하세요.
-- Q07) 모든 직원의 이름, 사원번호, 성별, 입사일, 전화번호를 조회하세요.
-- Q08) 이름이 '홍길동'인 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
-- Q09) 여자 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
-- Q10) '울산' 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.


-- Q11) 포인트가 500,000 이상인 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
-- Q12) 이름에 공백이 들어간 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
-- Q13) 전화번호가 010으로 시작하지 않는 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
-- Q14) 포인트가 500,000 이상 '서울' 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
-- Q15) 포인트가 500,000 이상인 '서울' 이외 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
-- Q16) 포인트가 400,000 이상인 '서울' 지역 남자 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
-- Q17) '강릉' 또는 '원주' 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
-- Q18) '서울' 또는 '부산' 또는 '제주' 또는 '인천' 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
-- Q19) 포인트가 400,000 이상, 500,000 이하인 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
-- Q20) 1990년에 출생한 고객의 이름, 아이디, 성별, 지역, 전화번호, 생일, 포인트를 조회하세요.
-- Q21) 1990년에 출생한 여자 고객의 이름, 아이디, 성별, 지역, 전화번호, 생일, 포인트를 조회하세요.
-- Q22) 1990년에 출생한 '대구' 또는 '경주' 지역 남자 고객의 이름, 아이디, 성별, 지역, 전화번호, 생일, 포인트를 조회하세요.
-- Q23) 1990년에 출생한 남자 고객의 이름, 아이디, 성별, 지역, 전화번호, 생일, 포인트를 조회하세요.
--      단, 홍길동(gildong) 형태로 이름과 아이디를 묶어서 조회하세요.
-- Q24) 근무중인 직원의 이름, 사원번호, 성별, 전화번호, 입사일를 조회하세요.
-- Q25) 근무중인 남자 직원의 이름, 사원번호, 성별, 전화번호, 입사일를 조회하세요.
-- Q26) 퇴사한 직원의 이름, 사원번호, 성별, 전화번호, 입사일, 퇴사일를 조회하세요.

-- Q28) 2019-01-01 ~ 2019-01-07 기간 주문의 주문번호, 고객아이디, 사원번호, 주문일시, 소계, 배송비, 전체금액을 조회하세요.
--      단, 고객아이디를 기준으로 오름차순 정렬해서 조회하세요.
    
-- Q29) 2019-01-01 ~ 2019-01-07 기간 주문의 주문번호, 고객아이디, 사원번호, 주문일시, 소계, 배송비, 전체금액을 조회하세요.
--      단, 전체금액을 기준으로 내림차순 정렬해서 조회하세요.

-- Q30) 2019-01-01 ~ 2019-01-07 기간 주문의 주문번호, 고객아이디, 사원번호, 주문일시, 소계, 배송비, 전체금액을 조회하세요.
--      단, 사원번호를 기준으로 오름차순, 같은 사원번호는 주문일시를 기준으로 내림차순 정렬해서 조회하세요.

/**
	그룹함수
**/
/** customer 테이블 사용 **/
-- Q01) 고객의 포인트 합을 조회하세요.

-- Q02) '서울' 지역 고객의 포인트 합을 조회하세요.

-- Q03) '서울' 지역 고객의 수를 조회하세요.

-- Q04) '서울' 지역 고객의 포인트 합과 평균을 조회하세요.
     
-- Q05) '서울' 지역 고객의 포인트 합, 평균, 최댓값, 최솟값을 조회하세요.

-- Q06) 남녀별 고객의 수를 조회하세요.

-- Q07) 지역별 고객의 수를 조회하세요.
--      단, 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.

 
-- Q08) 지역별 고객의 수를 조회하세요.
--      단, 고객의 수가 10명 이상인 행만 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.
   
    
-- Q09) 남녀별 포인트 합을 조회하세요.
    
-- Q10) 지역별 포인트 합을 조회하세요.
--      단, 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.
    
-- Q11) 지역별 포인트 합을 조회하세요.
--      단, 포인트 합이 1,000,000 이상인 행만 포인트 합을 기준으로 내림차순 정렬해서 조회하세요.

      
-- Q12) 지역별 포인트 합을 조회하세요.
--      단, 포인트 합을 기준으로 내림차순 정렬해서 조회하세요.
   

-- Q13) 지역별 고객의 수, 포인트 합을 조회하세요.
--      단, 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.


-- Q14) 지역별 포인트 합, 포인트 평균을 조회하세요.
--      단, 포인트가 NULL이 아닌 고객을 대상으로 하며, 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.

-- Q15) '서울', '부산', '대구' 지역 고객의 지역별, 남녀별 포인트 합과 평균을 조회하세요.
--      단, 지역 이름을 기준으로 오름차순, 같은 지역은 성별을 기준으로 오름차순 정렬해서 조회하세요.


/** order_header 테이블 사용 **/
    
-- Q16) 2019년 1월 주문에 대하여 고객아이디별 전체금액 합을 조회하세요.


-- Q17) 주문연도별 전체금액 합계를 조회하세요.

-- Q18) 2019.01 ~ 2019.06 기간 주문에 대하여 주문연도별, 주문월별 전체금액 합을 조회하세요.

-- Q19) 2019.01 ~ 2019.06 기간 주문에 대하여 주문연도별, 주문월별 전체금액 합과 평균을 조회하세요.

-- Q20) 주문연도별, 주문월별 전체금액 합과 평균을 조회하고, rollup 함수를 이용하여 소계와 총계를 출력해주세요.


USE MYSHOP2019;
SELECT DATABASE();

/**
	테이블 조인
*/
-- Q01) 전체금액이 8,500,000 이상인 주문의 주문번호, 고객아이디, 사원번호, 주문일시, 전체금액을 조회하세요.
-- ORDER_HEADER 테이블 : ORDER_ID, CUSTOMER_ID, EMPLOYEE_ID, ORDER_DATE, TOTAL_DUE
SELECT COUNT(*) FROM ORDER_HEADER;  -- 903  
SELECT COUNT(*) FROM ORDER_HEADER WHERE TOTAL_DUE >= 8500000;  -- 7
SELECT  ORDER_ID,
		CUSTOMER_ID,
        EMPLOYEE_ID,
        ORDER_DATE,
        TOTAL_DUE
FROM ORDER_HEADER
WHERE TOTAL_DUE >= 8500000
ORDER BY TOTAL_DUE DESC;     


-- Q02) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 고객이름도 같이 조회되게 수정하세요.
SELECT  OH.ORDER_ID,
		OH.CUSTOMER_ID,
        C.CUSTOMER_NAME,
        OH.EMPLOYEE_ID,
        OH.ORDER_DATE,
        OH.TOTAL_DUE
FROM ORDER_HEADER OH, CUSTOMER C
WHERE OH.CUSTOMER_ID = C.CUSTOMER_ID
	AND TOTAL_DUE >= 8500000
ORDER BY TOTAL_DUE DESC;


-- Q03) Q01 쿼리를 복사해 붙여 넣은 후 직원이름도 같이 조회되게 수정하세요.
SELECT  OH.ORDER_ID,
		OH.CUSTOMER_ID,
        C.CUSTOMER_NAME,
        OH.EMPLOYEE_ID,
        E.EMPLOYEE_NAME,
        OH.ORDER_DATE,
        OH.TOTAL_DUE
FROM ORDER_HEADER OH, CUSTOMER C , EMPLOYEE E
WHERE OH.CUSTOMER_ID = C.CUSTOMER_ID
	AND OH.EMPLOYEE_ID = E.EMPLOYEE_ID
	AND TOTAL_DUE >= 8500000
ORDER BY TOTAL_DUE DESC;

-- Q04) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 고객이름, 직원이름도 같이 조회되게 수정하세요.
-- Q05) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 
-- 전체금액이 8,500,000 이상인 '서울' 지역 고객만 조회되게 수정하세요.
SELECT  OH.ORDER_ID,
		OH.CUSTOMER_ID,
        C.CUSTOMER_NAME,
        OH.EMPLOYEE_ID,
        E.EMPLOYEE_NAME,
        OH.ORDER_DATE,
        OH.TOTAL_DUE,
        C.CITY
FROM ORDER_HEADER OH, CUSTOMER C , EMPLOYEE E
WHERE OH.CUSTOMER_ID = C.CUSTOMER_ID
	AND OH.EMPLOYEE_ID = E.EMPLOYEE_ID
	AND TOTAL_DUE >= 8500000
    AND C.CITY = '서울'
ORDER BY TOTAL_DUE DESC;

-- ANSI SQL
SELECT  OH.ORDER_ID,
		OH.CUSTOMER_ID,
        C.CUSTOMER_NAME,
        OH.EMPLOYEE_ID,
        E.EMPLOYEE_NAME,
        OH.ORDER_DATE,
        OH.TOTAL_DUE,
        C.CITY
FROM ORDER_HEADER OH INNER JOIN CUSTOMER C
					 INNER JOIN EMPLOYEE E
	ON OH.CUSTOMER_ID = C.CUSTOMER_ID
	AND OH.EMPLOYEE_ID = E.EMPLOYEE_ID
WHERE OH.TOTAL_DUE >= 8500000
	AND C.CITY = '서울'
ORDER BY OH.TOTAL_DUE DESC;   

--
SELECT  OH.ORDER_ID,
		OH.CUSTOMER_ID,
        C.CUSTOMER_NAME,
        OH.EMPLOYEE_ID,
        E.EMPLOYEE_NAME,
        OH.ORDER_DATE,
        OH.TOTAL_DUE,
        C.CITY
FROM ORDER_HEADER OH INNER JOIN CUSTOMER C ON OH.CUSTOMER_ID = C.CUSTOMER_ID
					 INNER JOIN EMPLOYEE E ON OH.EMPLOYEE_ID = E.EMPLOYEE_ID
WHERE OH.TOTAL_DUE >= 8500000
	AND C.CITY = '서울'
ORDER BY OH.TOTAL_DUE DESC; 
                    

-- Q06) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 
-- 전체금액이 8,500,000 이상인 '서울' 지역 '남자' 고객만 조회되게 수정하세요.
SELECT  OH.ORDER_ID,
		OH.CUSTOMER_ID,
        C.CUSTOMER_NAME,
        OH.EMPLOYEE_ID,
        E.EMPLOYEE_NAME,
        OH.ORDER_DATE,
        OH.TOTAL_DUE,
        C.CITY,
        C.GENDER
FROM ORDER_HEADER OH, CUSTOMER C , EMPLOYEE E
WHERE OH.CUSTOMER_ID = C.CUSTOMER_ID
	AND OH.EMPLOYEE_ID = E.EMPLOYEE_ID
	AND TOTAL_DUE >= 8500000
    AND C.CITY = '서울'
    AND C.GENDER = 'M'
ORDER BY TOTAL_DUE DESC;

-- Q07) 주문수량이 30개 이상인 주문의 주문번호, 상품코드, 주문수량, 단가, 지불금액을 조회하세요.
DESC ORDER_DETAIL;
SELECT * FROM ORDER_DETAIL;
-- 테이블 컬럼명 변경
ALTER TABLE ORDER_DETAIL
	 rename column drder_detail_id	to order_detail_id ;
DESC ORDER_DETAIL;     

-- ORACLE 방식
SELECT ORDER_ID, ORDER_DETAIL_ID, PRODUCT_ID, ORDER_QTY, UNIT_PRICE, LINE_TOTAL
	FROM ORDER_DETAIL;

-- Q08) 위에서 작성한 쿼리문을 복사해서 붙여 넣은 후 상품이름도 같이 조회되도록 수정하세요.
SELECT 	OD.ORDER_ID, 
		OD.ORDER_DETAIL_ID, 
        OD.PRODUCT_ID, 
        P.PRODUCT_NAME,
        OD.ORDER_QTY, 
        OD.UNIT_PRICE, 
        OD.LINE_TOTAL
	FROM ORDER_DETAIL OD, PRODUCT P
    WHERE OD.PRODUCT_ID = P.PRODUCT_ID;

-- ANSI SQL  
SELECT 	OD.ORDER_ID, 
		OD.ORDER_DETAIL_ID, 
        OD.PRODUCT_ID, 
        P.PRODUCT_NAME,
        OD.ORDER_QTY, 
        OD.UNIT_PRICE, 
        OD.LINE_TOTAL
	FROM ORDER_DETAIL OD INNER JOIN PRODUCT P ON OD.PRODUCT_ID = P.PRODUCT_ID;  

-- Q09) 상품코드, 상품이름, 소분류아이디를 조회하세요.
DESC PRODUCT;
SELECT COUNT(*) FROM PRODUCT;  -- 41
SELECT  PRODUCT_ID,
		PRODUCT_NAME,
        SUB_CATEGORY_ID
FROM PRODUCT;   
 
-- Q10) 위에서 작성한 쿼리문을 복사해서 붙여 넣은 후 소분류이름, 대분류아이디가 조회되게 수정하세요.
SELECT  P.PRODUCT_ID,
		P.PRODUCT_NAME,
        P.SUB_CATEGORY_ID,
        SC.SUB_CATEGORY_NAME,
        SC.CATEGORY_ID
FROM PRODUCT P, SUB_CATEGORY SC
WHERE P.SUB_CATEGORY_ID = SC.SUB_CATEGORY_ID;

-- ANSI SQL
SELECT  P.PRODUCT_ID,
		P.PRODUCT_NAME,
        P.SUB_CATEGORY_ID,
        SC.SUB_CATEGORY_NAME,
        SC.CATEGORY_ID
FROM PRODUCT P INNER JOIN SUB_CATEGORY SC 
	ON P.SUB_CATEGORY_ID = SC.SUB_CATEGORY_ID;
    
-- 위에서 작성한 쿼리문을 복사해서 붙여 넣은 후 대분류이름 추가해서 조회
SELECT  P.PRODUCT_ID,
		P.PRODUCT_NAME,
        P.SUB_CATEGORY_ID,
        SC.SUB_CATEGORY_NAME,
        SC.CATEGORY_ID,
        C.CATEGORY_NAME
FROM PRODUCT P, SUB_CATEGORY SC, CATEGORY C
WHERE P.SUB_CATEGORY_ID = SC.SUB_CATEGORY_ID
	AND SC.CATEGORY_ID = C.CATEGORY_ID;

-- ANSI SQL    
SELECT  P.PRODUCT_ID,
		P.PRODUCT_NAME,
        P.SUB_CATEGORY_ID,
        SC.SUB_CATEGORY_NAME,
        SC.CATEGORY_ID,
        C.CATEGORY_NAME
FROM PRODUCT P INNER JOIN SUB_CATEGORY SC ON P.SUB_CATEGORY_ID = SC.SUB_CATEGORY_ID
			   INNER JOIN CATEGORY C      ON SC.CATEGORY_ID = C.CATEGORY_ID ;

-- 대분류, 소분류별, 상품갯수, 상품가격 합계, 상품가격 평균 
SELECT  CATEGORY_NAME, 
		SUB_CATEGORY_NAME, 
        COUNT(PRODUCT_ID),
        SUM(UNIT_PRICE),
        AVG(UNIT_PRICE)
FROM (SELECT  DISTINCT P.PRODUCT_ID,
			P.PRODUCT_NAME,
			P.SUB_CATEGORY_ID,
			SC.SUB_CATEGORY_NAME,
			SC.CATEGORY_ID,
			C.CATEGORY_NAME,
			OD.UNIT_PRICE
			FROM PRODUCT P, SUB_CATEGORY SC, CATEGORY C, ORDER_DETAIL OD
			WHERE P.SUB_CATEGORY_ID = SC.SUB_CATEGORY_ID
				AND SC.CATEGORY_ID = C.CATEGORY_ID
				AND P.PRODUCT_ID = OD.PRODUCT_ID) T1
GROUP BY CATEGORY_NAME, SUB_CATEGORY_NAME;


-- Q11) 다정한 사원이 2019년에 주문한 상품명을 모두 출력해주세요.
-- EMPLOYEE, ORDER_HEADER, ORDER_DETAIL, PRODUCT
SELECT  E.EMPLOYEE_NAME,
		OH.ORDER_DATE,
        P.PRODUCT_NAME, 
        OH.ORDER_ID,
        OD.ORDER_DETAIL_ID
	FROM EMPLOYEE E, ORDER_HEADER OH, ORDER_DETAIL OD, PRODUCT P
    WHERE E.EMPLOYEE_ID = OH.EMPLOYEE_ID
		AND OH.ORDER_ID = OD.ORDER_ID
        AND OD.PRODUCT_ID = P.PRODUCT_ID
		AND E.EMPLOYEE_NAME = '다정한'
        AND LEFT(OH.ORDER_DATE, 4) = '2019';

-- 2019년도 1월에 주문아이디별 다정한 사원의 주문건수 조회  
SELECT ORDER_ID, COUNT(ORDER_ID)
FROM (SELECT  E.EMPLOYEE_NAME,
			OH.ORDER_DATE,
			P.PRODUCT_NAME, 
			OH.ORDER_ID,
			OD.ORDER_DETAIL_ID
		FROM EMPLOYEE E, ORDER_HEADER OH, ORDER_DETAIL OD, PRODUCT P
		WHERE E.EMPLOYEE_ID = OH.EMPLOYEE_ID
			AND OH.ORDER_ID = OD.ORDER_ID
			AND OD.PRODUCT_ID = P.PRODUCT_ID
			AND E.EMPLOYEE_NAME = '다정한'
            AND LEFT(OH.ORDER_DATE, 7) = '2019-01') T1
GROUP BY ORDER_ID            
;            

-- 주문년도별, 주문월별, 주문아이디별, 다정한 사원의 주문건수 조회  
-- 2019년도만 조회
SELECT 	LEFT(ORDER_DATE, 4) AS YEAR, 
		SUBSTRING(ORDER_DATE,6,2) AS MONTH,
        COUNT(ORDER_ID)
FROM (SELECT  E.EMPLOYEE_NAME,
			OH.ORDER_DATE,
			P.PRODUCT_NAME, 
			OH.ORDER_ID,
			OD.ORDER_DETAIL_ID
		FROM EMPLOYEE E, ORDER_HEADER OH, ORDER_DETAIL OD, PRODUCT P
		WHERE E.EMPLOYEE_ID = OH.EMPLOYEE_ID
			AND OH.ORDER_ID = OD.ORDER_ID
			AND OD.PRODUCT_ID = P.PRODUCT_ID
			AND E.EMPLOYEE_NAME = '다정한') T1
GROUP BY LEFT(ORDER_DATE, 4), SUBSTRING(ORDER_DATE,6,2)
HAVING YEAR = '2019';          


-- Q12) 청소기를 구입한 고객아이디, 사원번호, 주문번호, 주문일시를 조회하세요.
SELECT 	ROW_NUMBER() OVER(ORDER BY OH.ORDER_DATE DESC) AS NO,
		OH.CUSTOMER_ID,
		OH.EMPLOYEE_ID,
        OH.ORDER_ID, 
        OH.ORDER_DATE,
        P.PRODUCT_NAME
	FROM ORDER_HEADER OH, ORDER_DETAIL OD, PRODUCT P
    WHERE OH.ORDER_ID = OD.ORDER_ID
		AND OD.PRODUCT_ID = P.PRODUCT_ID
        AND PRODUCT_NAME LIKE '%청소기%';
        
SELECT PRODUCT_NAME FROM PRODUCT WHERE PRODUCT_NAME LIKE '%청소기%';        


/**
	서브쿼리
*/
-- Q13) 'mtkim', 'soyoukim' 고객 주문의 
-- 주문번호, 고객아이디, 주문일시, 전체금액을 조회하세요.  
SELECT ORDER_ID, CUSTOMER_ID, ORDER_DATE, TOTAL_DUE 
FROM ORDER_HEADER 
WHERE CUSTOMER_ID IN ('MTKIM', 'soyoukim');  

-- 김마트, 김소유 고객의 주문번호, 고객아이디, 주문일시, 전체금액을 조회하세요.  
SELECT ORDER_ID, CUSTOMER_ID, ORDER_DATE, TOTAL_DUE 
FROM ORDER_HEADER 
WHERE CUSTOMER_ID IN (SELECT CUSTOMER_ID 
						FROM CUSTOMER WHERE CUSTOMER_NAME IN ('김마트','김소유')); 

-- Q14) '전주' 지역 고객의 아이디, 고객명, 고객의 생일를 조회하세요. 
DESC CUSTOMER;
SELECT CUSTOMER_ID, CUSTOMER_NAME, BIRTH_DATE
FROM CUSTOMER
WHERE CITY = '전주';

-- '전주' 지역 고객이 주문한 상품의 주문번호를 조회
SELECT *
	FROM ORDER_HEADER
    WHERE CUSTOMER_ID IN (SELECT CUSTOMER_ID FROM CUSTOMER WHERE CITY='전주');

-- Q15) 위 두 쿼리문을 조합해서 
-- 하위 쿼리를 사용해 '전주' 지역 고객 주문의 주문번호, 고객아이디, 주문일시, 전체금액을 조회하세요.
-- 만약 고객명을 함께 출력하고자 한다면, ORDER_HEADER & CUSTOMER 조인해야 함
SELECT ORDER_ID, CUSTOMER_ID, ORDER_DATE, TOTAL_DUE
	FROM ORDER_HEADER
    WHERE CUSTOMER_ID IN (SELECT CUSTOMER_ID FROM CUSTOMER WHERE CITY='전주');

-- Q16) 고객의 포인트 최댓값을 조회하세요.
SELECT MAX(POINT) FROM CUSTOMER;

-- Q17) 하위 쿼리를 사용해 가장 포인트가 많은 고객의 이름, 아이디, 등록일, 포인트를 조회하세요.
SELECT 	CUSTOMER_NAME,
		CUSTOMER_ID,
        REGISTER_DATE,
        POINT
FROM CUSTOMER
WHERE POINT = (SELECT MAX(POINT) FROM CUSTOMER);  

-- 포인트가 가장 적은 고객 조회
SELECT 	CUSTOMER_NAME,
		CUSTOMER_ID,
        REGISTER_DATE,
        POINT
FROM CUSTOMER
WHERE POINT = (SELECT MIN(POINT) FROM CUSTOMER);       

-- Q18) 하위 쿼리를 사용해 홍길동(gdhong) 고객보다 포인트가 많은 
-- 고객 이름, 아이디, 등록일, 포인트를 조회하세요.
SELECT  CUSTOMER_NAME,
		CUSTOMER_ID,
        REGISTER_DATE,
        POINT
FROM CUSTOMER
WHERE POINT > (SELECT POINT FROM CUSTOMER WHERE CUSTOMER_NAME = '홍길동');   

-- Q19) 하위 쿼리를 사용해 홍길동(gdhong) 고객과 같은 지역의 
-- 고객 이름, 아이디, 지역, 등록일, 포인트를 조회하세요.
--      단, 고객 이름을 기준으로 오름차순 정렬해서 조회하세요.
SELECT  CUSTOMER_NAME,
		CUSTOMER_ID,
        CITY,
        REGISTER_DATE,
        POINT
FROM CUSTOMER
WHERE CITY = (SELECT CITY FROM CUSTOMER WHERE CUSTOMER_NAME = '홍길동')
ORDER BY CUSTOMER_NAME;        

-- Q20) 하위 쿼리를 사용해 홍길동(gdhong) 고객보다 
-- 포인트가 많은 고객 이름, 아이디, 등록일, 포인트를 조회하고, 행번호를 추가하여 출력하세요.
SELECT  ROW_NUMBER() OVER(ORDER BY POINT DESC) AS NO,
		CUSTOMER_NAME,
		CUSTOMER_ID,
        REGISTER_DATE,
        POINT
FROM CUSTOMER
WHERE POINT > (SELECT POINT FROM CUSTOMER WHERE CUSTOMER_NAME = '홍길동');   

-- 2016 ~ 2019년도 까지 주문한 고객의 아이디, 고객명, 주문번호, 주문총금액을 조회
SHOW TABLES;
SELECT COUNT(*) FROM ORDER_HEADER; -- 903
SELECT COUNT(*) FROM ORDER_HEADER2016; -- 596
SELECT COUNT(*) FROM ORDER_HEADER2017; -- 561

-- UNION ALL
SELECT T1.CUSTOMER_ID, C.CUSTOMER_NAME, T1.ORDER_ID, T1.TOTAL_DUE
FROM 	CUSTOMER C,
		(	SELECT * FROM ORDER_HEADER
			UNION ALL
			SELECT * FROM ORDER_HEADER2016
			UNION ALL
			SELECT * FROM ORDER_HEADER2017) T1
WHERE C.CUSTOMER_ID = T1.CUSTOMER_ID  ;

-- 년도별 주문건수, 총판매합계, 년도 기준 오름차순 정렬
-- 년도 : YEAR, 건수: COUNT, 합계: SUM
-- '년도', '건', 3자리구분 '원'
SELECT 	CONCAT(LEFT(ORDER_DATE,4), '년도') AS YEAR, 
		CONCAT(COUNT(ORDER_ID), '건') AS COUNT, 
        CONCAT(FORMAT(SUM(TOTAL_DUE), 0) , '원') AS SUM
FROM 	CUSTOMER C,
		(	SELECT * FROM ORDER_HEADER
			UNION ALL
			SELECT * FROM ORDER_HEADER2016
			UNION ALL
			SELECT * FROM ORDER_HEADER2017) T1
WHERE C.CUSTOMER_ID = T1.CUSTOMER_ID  
GROUP BY YEAR
ORDER BY YEAR ASC;

-- VIEW를 이용하여 ORDER_HEADER_TOTAL (2016 ~ 2019)
SELECT * 
FROM INFORMATION_SCHEMA.VIEWS
WHERE TABLE_SCHEMA = 'MYSHOP2019';	

-- 
CREATE VIEW ORDER_HEADER_TOTAL
AS
SELECT * FROM ORDER_HEADER
UNION ALL
SELECT * FROM ORDER_HEADER2016
UNION ALL
SELECT * FROM ORDER_HEADER2017 ;

--
SELECT 	CONCAT(LEFT(ORDER_DATE,4), '년도') AS YEAR, 
		CONCAT(COUNT(ORDER_ID), '건') AS COUNT, 
        CONCAT(FORMAT(SUM(TOTAL_DUE), 0) , '원') AS SUM
FROM 	CUSTOMER C,
		ORDER_HEADER_TOTAL T1
WHERE C.CUSTOMER_ID = T1.CUSTOMER_ID  
GROUP BY YEAR
ORDER BY YEAR ASC;

--
-- 2016 ~ 2019 : ORDER_HEADER_TOTAL (VIEW)
-- 2016 ~ 2019 DETAIL : ORDER_DETAIL_TOTAL (VIEW)
SELECT COUNT(*) FROM ORDER_DETAIL;  -- 2425
SELECT COUNT(*) FROM ORDER_DETAIL2016;  -- 1582
SELECT COUNT(*) FROM ORDER_DETAIL2017;  -- 1479

SELECT COUNT(*)  -- 5486
FROM (
	SELECT * FROM ORDER_DETAIL
    UNION ALL
    SELECT * FROM ORDER_DETAIL2016
    UNION ALL
    SELECT * FROM ORDER_DETAIL2017
) T;

CREATE VIEW ORDER_DETAIL_TOTAL
AS
	SELECT * FROM ORDER_DETAIL
	UNION ALL
	SELECT * FROM ORDER_DETAIL2016
	UNION ALL
	SELECT * FROM ORDER_DETAIL2017 ;

SELECT * FROM INFORMATION_SCHEMA.VIEWS WHERE TABLE_SCHEMA = 'MYSHOP2019';   
SELECT COUNT(*) FROM ORDER_DETAIL_TOTAL; 

--
SELECT 	LEFT(ORDER_DATE, 4) AS YEAR, 
		SUBSTRING(ORDER_DATE,6,2) AS MONTH,
        COUNT(ORDER_ID)
FROM (SELECT  E.EMPLOYEE_NAME,
			OH.ORDER_DATE,
			P.PRODUCT_NAME, 
			OH.ORDER_ID,
			OD.ORDER_DETAIL_ID
		FROM EMPLOYEE E, ORDER_HEADER_TOTAL OH, ORDER_DETAIL_TOTAL OD, PRODUCT P
		WHERE E.EMPLOYEE_ID = OH.EMPLOYEE_ID
			AND OH.ORDER_ID = OD.ORDER_ID
			AND OD.PRODUCT_ID = P.PRODUCT_ID
			) T1
GROUP BY LEFT(ORDER_DATE, 4), SUBSTRING(ORDER_DATE,6,2)
ORDER BY YEAR ASC ;   

-- 카테고리 활용 : 서브쿼리
SELECT * FROM CATEGORY;

-- 대분류로 '가전제품' 선택 후 소분류 값 가져오기
SELECT SUB_CATEGORY_NAME
	FROM SUB_CATEGORY
    WHERE CATEGORY_ID IN (SELECT CATEGORY_ID FROM CATEGORY 
								WHERE CATEGORY_NAME = '가전제품');

-- 소분류에서 '대형'을 선택 한 후 상품명 가져오기
SELECT PRODUCT_NAME
	FROM PRODUCT
    WHERE SUB_CATEGORY_ID IN (SELECT SUB_CATEGORY_ID 
								FROM SUB_CATEGORY WHERE SUB_CATEGORY_NAME = '소형');

    
 







