const menu = (name, picUrl, location) => ({ name, picUrl, location });
module.exports = [
    [ '박가네 부대찌개', 'http://seotaean.com/wp-content/uploads/2014/03/IMAG3434.jpg', '3층' ],
    [ '순대국', 'http://mblogthumb3.phinf.naver.net/MjAxNjExMjhfMzIg/MDAxNDgwMzIwMjE1MDA2._YO-B8nuMS9XQkgT119aSmE06iXJJVtEO7KD0aI05acg.Z_XJHQDo3XsV1daWBPUaFlLst8SU6wBw7ri6di0bY-Ug.JPEG.hm3548/%EC%B9%A0%EB%B3%B4%EC%88%9C%EB%8C%80%EA%B5%AD-12.JPG?type=w800', '3층' ],
    [ '하코야', 'http://blogfiles5.naver.net/20150611_76/skfkddk1_1434031414295yMo1Q_JPEG/NaverBlog_20150611_230333_00.jpg', '3층' ],
    [ '미스터 스시', 'http://cfile22.uf.tistory.com/image/256B5C415252026E355138', '3층' ],
  //[ '추어탕', 'http://m.논두렁추어탕.kr/data/admin/html_upload/images/304951cf42e863e3f832adf87cb1f938.jpg', '3층' ],
    [ '낭풍 김치찌개', 'http://cfile26.uf.tistory.com/image/157E3C474F64662A1ACA86', '3층' ],
    [ '포메인', 'http://mblogthumb2.phinf.naver.net/20140804_149/44kgram_14071385930775ILLI_JPEG/20140328_%2827%29.jpg?type=w2', '3층' ],
    [ '북창동 순두부찌개', 'https://ggtour.or.kr/wp-content/uploads/2014/02/781_01_800-300x225.jpg', '3층' ],
    [ '한촌설렁탕', 'http://www.hanchon.kr/img/pro_01.jpg', '3층' ],
    [ 'KFC', 'https://www.onlyitaewon.com/wp-content/uploads/2016/08/KFC-Itaewon-2.jpg', '1층' ],
    [ '돈치킨', 'https://t1.daumcdn.net/cfile/tistory/9923AF335A2D05B928', '1층' ],
    [ '우림분식 또는 공가김밥', 'http://cfile235.uf.daum.net/image/21605E4C52C257ED3ADE90', '1층' ],
    [ '육전 면사무소', 'https://cdn.imweb.me/thumbnail/20180814/5b725f5bc205b.png', '1층' ],
    [ '이화수 육개장', 'http://mblogthumb3.phinf.naver.net/MjAxNzA3MTZfODkg/MDAxNTAwMjEzNTY0MTMz.lJjrHLlDLwXLvNsr-jsUIvFcLKSJ8TdFfLCXfffggq0g.hEvpn5kq34b2tMggR4n6o5yi_KKolKGRYV31zBoIWU4g.JPEG.bkbros/%EC%9D%B4%ED%99%94%EC%88%98%EC%9C%A1%EA%B0%9C%EC%9E%A517.jpg?type=w800', '1층' ],
    [ '새벽집', 'http://mblogthumb3.phinf.naver.net/20151027_290/darcomm_1445926066220HjRcx_JPEG/IMG_5219.JPG?type=w2', '1층' ],
    [ '차이나', 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Korean.cuisine-Jajangmyeon-01.jpg', '지하' ],
  //[ '백리향 중화요리', 'http://mblogthumb2.phinf.naver.net/MjAxNzAzMDNfOTAg/MDAxNDg4NTMyNjgxNzYy.crTx77W6doDUgvX6x-sOp8G_z10eDXMndsl7fsgQ3HYg.EBFIBxmoQitsW3pXloNmO7DUM3jfCVrrNfCP-CwhFeAg.JPEG.adventure_kr/image_5865115561488532581335.jpg?type=w800', '지하' ],
  //[ '리더스 나인', 'http://cfile236.uf.daum.net/image/2279DC3A569F0BB93DBF8F', '지하' ],
    [ '순남 시래기', 'http://cfile225.uf.daum.net/image/275A73345930F0FC2DA0EE', '지하' ],
    [ '전 선생', 'http://cfile203.uf.daum.net/image/256F453351FDC5D0291138', '지하' ],
    [ '맥도날드', 'http://cfile23.uf.tistory.com/image/995BF83359D9C3DB1EECA5', '바깥' ],
    [ '이마트', 'http://cfile28.uf.tistory.com/image/242E5F3F5688FABD2D4A47', '바깥' ]
]
.map(args => menu(...args));
