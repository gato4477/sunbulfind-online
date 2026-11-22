/* Gato: local discovery; legacy URLs and analytics stay intact. */
(() => {
'use strict';
const root=document.querySelector('.search-card');
if(!root || typeof REGIONS === 'undefined') return;
const STATIONS=[["광주","광주송정역"],["광주","금남로4가역"],["광주","금남로5가역"],["광주","금호지구역"],["광주","김대중컨벤션센터역"],["광주","남광주역"],["광주","녹동역"],["광주","농성역"],["광주","도산역"],["광주","돌고개역"],["광주","문화전당역"],["광주","문흥역"],["광주","상무역"],["광주","소태역"],["광주","송정공원역"],["광주","신용역"],["광주","양동시장역"],["광주","운남역"],["광주","운천역"],["광주","일곡역"],["광주","평동역"],["광주","학동증심사입구역"],["광주","화정역"],["대구","각산역"],["대구","감삼역"],["대구","강창역"],["대구","경대병원역"],["대구","계대성서캠퍼스역"],["대구","계명대역"],["대구","고산역"],["대구","공단역"],["대구","구암역"],["대구","내당역"],["대구","다사역"],["대구","달성공원역"],["대구","담티역"],["대구","대곡역"],["대구","대공원역"],["대구","대구은행역"],["대구","대봉교역"],["대구","대실역"],["대구","동대구역"],["대구","동천역"],["대구","동촌역"],["대구","두류역"],["대구","만촌역"],["대구","만평역"],["대구","매천시장역"],["대구","매천역"],["대구","명덕역"],["대구","문양역"],["대구","반고개역"],["대구","반야월역"],["대구","반월당역"],["대구","방촌역"],["대구","범물역"],["대구","범어역"],["대구","북구청역"],["대구","사월역"],["대구","상인역"],["대구","서문시장역"],["대구","서시장역"],["대구","설화명곡역"],["대구","성서산업단지역"],["대구","수성구민운동장역"],["대구","수성구청역"],["대구","수성못역"],["대구","수성시장역"],["대구","신기역"],["대구","신남역"],["대구","신매역"],["대구","신서혁신도시역"],["대구","신천역"],["대구","아양교역"],["대구","안심역"],["대구","연호역"],["대구","영남대역"],["대구","용계역"],["대구","용산역"],["대구","용지역"],["대구","원대역"],["대구","월배역"],["대구","월촌역"],["대구","율하역"],["대구","이곡역"],["대구","임당역"],["대구","정평역"],["대구","죽전역"],["대구","중앙로역"],["대구","지산역"],["대구","진천역"],["대구","청구역"],["대구","칠곡경대병원역"],["대구","칠곡운암역"],["대구","태전역"],["대구","팔거역"],["대구","팔달시장역"],["대구","팔달역"],["대구","학정역"],["대구","해안역"],["대구","화원역"],["대구","황금역"],["대전","갑천역"],["대전","구암역"],["대전","노은역"],["대전","대동역"],["대전","대전역역"],["대전","반석역"],["대전","서대전네거리역"],["대전","시청역"],["대전","신흥역"],["대전","오룡역"],["대전","용문역"],["대전","원신흥역"],["대전","월드컵경기장역"],["대전","유성온천역"],["대전","자양역"],["대전","정부청사역"],["대전","중구청역"],["대전","중앙로역"],["대전","지족역"],["대전","탄방역"],["대전","판암역"],["부산","가야역"],["부산","감전역"],["부산","강서구청역"],["부산","개금역"],["부산","거제역"],["부산","경성대부경대역"],["부산","고촌역"],["부산","광안역"],["부산","괴정역"],["부산","교대역"],["부산","구남역"],["부산","구명역"],["부산","구서역"],["부산","구포역"],["부산","국제금융센터부산은행역"],["부산","금곡역"],["부산","금련산역"],["부산","금사역"],["부산","낙민역"],["부산","남산역"],["부산","남산정역"],["부산","남양산역"],["부산","남천역"],["부산","남포역"],["부산","낫개역"],["부산","냉정역"],["부산","노포역"],["부산","다대포항역"],["부산","다대포해수욕장역"],["부산","당리역"],["부산","대연역"],["부산","대저역"],["부산","대티역"],["부산","덕천역"],["부산","덕포역"],["부산","동대신역"],["부산","동래역"],["부산","동매역"],["부산","동백역"],["부산","동원역"],["부산","동의대역"],["부산","두실역"],["부산","만덕역"],["부산","망미역"],["부산","명륜역"],["부산","명장역"],["부산","모덕역"],["부산","모라역"],["부산","못골역"],["부산","문현역"],["부산","물만골역"],["부산","미남역"],["부산","민락역"],["부산","반송역"],["부산","반여농산물시장역"],["부산","배산역"],["부산","범내골역"],["부산","범어사역"],["부산","범일역"],["부산","벡스코역"],["부산","부산대양산캠퍼스역"],["부산","부산대역"],["부산","부산역역"],["부산","부산진역"],["부산","부전시장역"],["부산","부전역"],["부산","사상역"],["부산","사직역"],["부산","사하역"],["부산","서대신역"],["부산","서동역"],["부산","서면역"],["부산","석대역"],["부산","센텀시티역"],["부산","수안역"],["부산","수영역"],["부산","수정역"],["부산","숙등역"],["부산","시청역"],["부산","신장림역"],["부산","신평역"],["부산","안평역"],["부산","양산역"],["부산","양정역"],["부산","연산역"],["부산","영산대역"],["부산","온천장역"],["부산","윗반송역"],["부산","율리역"],["부산","자갈치역"],["부산","장림역"],["부산","장산역"],["부산","장전역"],["부산","전포역"],["부산","종합운동장역"],["부산","좌천역"],["부산","주례역"],["부산","중동역"],["부산","중앙역"],["부산","증산역"],["부산","지게골역"],["부산","체육공원역"],["부산","초량역"],["부산","충렬사역"],["부산","토성역"],["부산","하단역"],["부산","해운대역"],["부산","호포역"],["부산","화명역"],["수도권","가락시장역"],["수도권","가산디지털단지역"],["수도권","강남구청역"],["수도권","강남역"],["수도권","강동구청역"],["수도권","강동역"],["수도권","강변역"],["수도권","강일역"],["수도권","개롱역"],["수도권","개화산역"],["수도권","거여역"],["수도권","건대입구역"],["수도권","경복궁역"],["수도권","경찰병원역"],["수도권","고덕역"],["수도권","고려대역"],["수도권","고속터미널역"],["수도권","공덕역"],["수도권","공릉역"],["수도권","광나루역"],["수도권","광명사거리역"],["수도권","광화문역"],["수도권","광흥창역"],["수도권","교대역"],["수도권","구로디지털단지역"],["수도권","구산역"],["수도권","구의역"],["수도권","구파발역"],["수도권","군자역"],["수도권","굴포천역"],["수도권","굽은다리역"],["수도권","금호역"],["수도권","길동역"],["수도권","길음역"],["수도권","김포공항역"],["수도권","까치산역"],["수도권","까치울역"],["수도권","낙성대역"],["수도권","남구로역"],["수도권","남부터미널역"],["수도권","남성역"],["수도권","남태령역"],["수도권","남한산성입구역"],["수도권","내방역"],["수도권","노원역"],["수도권","녹번역"],["수도권","녹사평역"],["수도권","논현역"],["수도권","단대오거리역"],["수도권","답십리역"],["수도권","당고개역"],["수도권","당산역"],["수도권","대림역"],["수도권","대청역"],["수도권","대치역"],["수도권","대흥역"],["수도권","도곡역"],["수도권","도림천역"],["수도권","도봉산역"],["수도권","독립문역"],["수도권","독바위역"],["수도권","돌곶이역"],["수도권","동대문역사문화공원역"],["수도권","동대문역"],["수도권","동대입구역"],["수도권","동묘앞역"],["수도권","동작역"],["수도권","둔촌동역"],["수도권","둔촌오륜역"],["수도권","디지털미디어시티역"],["수도권","뚝섬역"],["수도권","뚝섬유원지역"],["수도권","마곡역"],["수도권","마들역"],["수도권","마장역"],["수도권","마천역"],["수도권","마포구청역"],["수도권","마포역"],["수도권","망원역"],["수도권","매봉역"],["수도권","먹골역"],["수도권","면목역"],["수도권","명동역"],["수도권","명일역"],["수도권","모란역"],["수도권","목동역"],["수도권","몽촌토성역"],["수도권","무악재역"],["수도권","문래역"],["수도권","문정역"],["수도권","미사역"],["수도권","미아사거리역"],["수도권","미아역"],["수도권","반포역"],["수도권","발산역"],["수도권","방배역"],["수도권","방이역"],["수도권","방화역"],["수도권","버티고개역"],["수도권","보라매역"],["수도권","보문역"],["수도권","복정역"],["수도권","봉은사역"],["수도권","봉천역"],["수도권","봉화산역"],["수도권","부천시청역"],["수도권","부천종합운동장역"],["수도권","부평구청역"],["수도권","불광역"],["수도권","사가정역"],["수도권","사당역"],["수도권","산성역"],["수도권","삼각지역"],["수도권","삼산체육관역"],["수도권","삼성역"],["수도권","삼성중앙역"],["수도권","삼전역"],["수도권","상계역"],["수도권","상도역"],["수도권","상동역"],["수도권","상봉역"],["수도권","상수역"],["수도권","상왕십리역"],["수도권","상월곡역"],["수도권","상일동역"],["수도권","새절역"],["수도권","서대문역"],["수도권","서울대입구역"],["수도권","서울역역"],["수도권","서초역"],["수도권","석계역"],["수도권","석촌고분역"],["수도권","석촌역"],["수도권","선릉역"],["수도권","선정릉역"],["수도권","성수역"],["수도권","성신여대입구역"],["수도권","송정역"],["수도권","송파나루역"],["수도권","송파역"],["수도권","수락산역"],["수도권","수서역"],["수도권","수유역"],["수도권","수진역"],["수도권","숙대입구역"],["수도권","숭실대입구역"],["수도권","시청역"],["수도권","신금호역"],["수도권","신길역"],["수도권","신내역"],["수도권","신답역"],["수도권","신당역"],["수도권","신대방삼거리역"],["수도권","신대방역"],["수도권","신도림역"],["수도권","신림역"],["수도권","신사역"],["수도권","신설동역"],["수도권","신용산역"],["수도권","신정네거리역"],["수도권","신정역"],["수도권","신중동역"],["수도권","신촌역"],["수도권","신풍역"],["수도권","신흥역"],["수도권","쌍문역"],["수도권","아차산역"],["수도권","아현역"],["수도권","안국역"],["수도권","안암역"],["수도권","암사역"],["수도권","압구정역"],["수도권","애오개역"],["수도권","약수역"],["수도권","양재역"],["수도권","양천구청역"],["수도권","양평역"],["수도권","어린이대공원역"],["수도권","언주역"],["수도권","여의나루역"],["수도권","여의도역"],["수도권","역삼역"],["수도권","역촌역"],["수도권","연신내역"],["수도권","영등포구청역"],["수도권","영등포시장역"],["수도권","오금역"],["수도권","오목교역"],["수도권","옥수역"],["수도권","온수역"],["수도권","올림픽공원역"],["수도권","왕십리역"],["수도권","용답역"],["수도권","용두역"],["수도권","용마산역"],["수도권","우장산역"],["수도권","월곡역"],["수도권","월드컵경기장역"],["수도권","을지로3가역"],["수도권","을지로4가역"],["수도권","을지로입구역"],["수도권","응암역"],["수도권","이대역"],["수도권","이수역"],["수도권","이촌역"],["수도권","이태원역"],["수도권","일원역"],["수도권","잠실나루역"],["수도권","잠실새내역"],["수도권","잠실역"],["수도권","잠원역"],["수도권","장승배기역"],["수도권","장암역"],["수도권","장지역"],["수도권","장한평역"],["수도권","제기동역"],["수도권","종각역"],["수도권","종로3가역"],["수도권","종로5가역"],["수도권","종합운동장역"],["수도권","중계역"],["수도권","중곡역"],["수도권","중앙보훈병원역"],["수도권","중화역"],["수도권","증산역"],["수도권","지축역"],["수도권","창동역"],["수도권","창신역"],["수도권","천왕역"],["수도권","천호역"],["수도권","철산역"],["수도권","청구역"],["수도권","청담역"],["수도권","청량리역"],["수도권","총신대입구역"],["수도권","춘의역"],["수도권","충무로역"],["수도권","충정로역"],["수도권","태릉입구역"],["수도권","하계역"],["수도권","하남검단산역"],["수도권","하남시청역"],["수도권","하남풍산역"],["수도권","학동역"],["수도권","학여울역"],["수도권","한강진역"],["수도권","한성대입구역"],["수도권","한성백제역"],["수도권","한양대역"],["수도권","합정역"],["수도권","행당역"],["수도권","혜화역"],["수도권","홍대입구역"],["수도권","홍제역"],["수도권","화곡역"],["수도권","화랑대역"],["수도권","회현역"],["수도권","효창공원앞역"]];
const aliases={'강원도':'강원','경기도':'경기','경상남도':'경남','경상북도':'경북','광주광역시':'광주','대구광역시':'대구','대전광역시':'대전','부산광역시':'부산','서울특별시':'서울','세종특별자치시':'세종','울산광역시':'울산','인천광역시':'인천','전라남도':'전남','전라북도':'전북','제주특별자치도':'제주','충청남도':'충남','충청북도':'충북'};
const norm=s=>String(s||'').toLowerCase().replace(/\s+/g,'').replace(/선불폰|선불유심/g,'');
const url=parts=>parts.map(encodeURIComponent).join('/');
const items=REGIONS.map(r=>({kind:'region',name:r.읍면동,city:r.시군구,province:r.시도,sub:r.시도+' · '+r.시군구,keywords:[r.시도,aliases[r.시도],r.시군구,r.읍면동].join(' '),href:url(['region',r.시도,r.시군구,r.읍면동+'선불폰.html'])}));
STATIONS.forEach(([city,name])=>{const displayName=name.replace(/역역$/,'역');items.push({kind:'station',name:displayName,city,province:city,sub:city+' · 지하철역',keywords:city+' '+displayName,href:url(['station',city,name+'선불폰.html'])});});
root.innerHTML=`<div class="finder-heading"><span class="finder-kicker">GATO LOCAL FINDER</span><h2>지역·지하철역 한번에 찾기</h2><p>전국 2,828개 지역과 490개 지하철역의 개통 안내를 검색해보세요.</p></div>
<div class="finder-types" role="group" aria-label="검색 종류"><button type="button" data-type="all" aria-pressed="true">전체</button><button type="button" data-type="region" aria-pressed="false">지역</button><button type="button" data-type="station" aria-pressed="false">지하철역</button></div>
<label class="finder-label" for="finder-query">어느 지역을 찾으세요?</label>
<div class="finder-searchline"><input type="search" id="finder-query" placeholder="예: 부천 심곡동, 강남역" autocomplete="off" aria-describedby="finder-status"/><button id="finder-go" type="button">검색</button></div>
<div class="finder-filters"><label for="finder-province">시·도</label><select id="finder-province"><option value="">전국</option></select><label for="finder-city">시·군·구</label><select id="finder-city" disabled><option value="">전체</option></select><button type="button" id="finder-reset">초기화</button></div>
<div class="finder-examples"><span>자주 찾는 곳</span><button type="button" data-sample="부천">부천</button><button type="button" data-sample="역삼동">역삼동</button><button type="button" data-sample="강남역">강남역</button></div>
<p id="finder-status" class="finder-status" role="status" aria-live="polite"></p>
<div id="finder-results" class="finder-results"></div><button type="button" id="finder-more" class="finder-more" hidden>결과 더 보기</button>
<p class="finder-notice">지역 안내 페이지는 실제 방문 매장 위치를 보장하지 않습니다. 방문은 사전 확인이 필요합니다.</p>`;
const query=root.querySelector('#finder-query'),province=root.querySelector('#finder-province'),city=root.querySelector('#finder-city'),results=root.querySelector('#finder-results'),status=root.querySelector('#finder-status'),more=root.querySelector('#finder-more');
const kinds=root.querySelectorAll('[data-type]');
Object.keys(aliases).forEach(p=>{const option=document.createElement('option');option.value=p;option.textContent=p;province.append(option);});
let kind='all',filtered=[],offset=0;
function fillCities(){
  const selected=province.value;
  city.replaceChildren(new Option('전체',''));
  if(!selected){city.disabled=true;return;}
  const cities=[...new Set(REGIONS.filter(r=>r.시도===selected).map(r=>r.시군구))].sort((a,b)=>a.localeCompare(b,'ko'));
  cities.forEach(c=>city.append(new Option(c,c)));
  city.disabled=false;
}
function matchesProvince(x,p){
  if(!p)return true;
  if(x.kind==='region')return x.province===p;
  if(x.province==='수도권')return ['서울특별시','경기도','인천광역시'].includes(p);
  return x.province===(aliases[p]||p);
}
function render(reset=true){
  if(reset){offset=0;results.replaceChildren();}
  const terms=query.value.trim().split(/\s+/).map(norm).filter(Boolean);
  filtered=items.filter(x=>{
    if(kind!=='all'&&x.kind!==kind)return false;
    if(!matchesProvince(x,province.value))return false;
    if(city.value && (x.kind!=='region'||x.city!==city.value))return false;
    const hay=norm(x.keywords);
    return terms.every(term=>hay.includes(term));
  });
  if(reset)filtered.sort((a,b)=>{
    const q=norm(query.value);
    const score=x=>q&&norm(x.name)===q?0:q&&norm(x.city)===q?1:q&&norm(x.name).startsWith(q)?2:3;
    return score(a)-score(b);
  });
  filtered.slice(offset,offset+16).forEach(item=>{
    const a=document.createElement('a');a.className='finder-result';a.href=item.href;
    const block=document.createElement('span');block.className='finder-result-text';
    const title=document.createElement('strong');title.textContent=item.name;
    const desc=document.createElement('small');desc.textContent=item.sub;
    const type=document.createElement('span');type.className='finder-result-type';type.textContent=item.kind==='station'?'역 안내':'지역 안내';
    block.append(title,desc);a.append(block,type);results.append(a);
  });
  offset=Math.min(offset+16,filtered.length);
  more.hidden=offset>=filtered.length;
  status.textContent=filtered.length.toLocaleString('ko-KR')+'개 결과'+(filtered.length?' · 원하는 항목을 눌러주세요.':' · 검색어 또는 지역을 바꿔보세요.');
}
function setKind(k){kind=k;kinds.forEach(b=>{const on=b.dataset.type===k;b.classList.toggle('selected',on);b.setAttribute('aria-pressed',String(on));});render();}
kinds.forEach(b=>b.addEventListener('click',()=>setKind(b.dataset.type)));
query.addEventListener('input',()=>render());
query.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();render();results.querySelector('a')?.focus();}});
root.querySelector('#finder-go').addEventListener('click',()=>{render();results.querySelector('a')?.focus();});
province.addEventListener('change',()=>{fillCities();render();});
city.addEventListener('change',()=>render());
root.querySelector('#finder-reset').addEventListener('click',()=>{query.value='';province.value='';fillCities();setKind('all');query.focus();});
root.querySelectorAll('[data-sample]').forEach(b=>b.addEventListener('click',()=>{query.value=b.dataset.sample;province.value='';fillCities();setKind('all');}));
more.addEventListener('click',()=>render(false));
const hero=document.querySelector('.hero-grid>div:first-child');
if(hero && !hero.querySelector(".guide-cta-home")){
  const actions=document.createElement('div');actions.className='finder-cta';
  const opening=document.createElement('a');opening.href='https://알뜰개통.kr/';opening.target='_blank';opening.rel='noopener noreferrer';opening.textContent='온라인 개통하기';opening.dataset.event='selfopen_click';opening.className='finder-cta-main';
  const kakao=document.createElement('a');kakao.href='https://m.site.naver.com/1GQVM';kakao.target='_blank';kakao.rel='noopener noreferrer';kakao.textContent='카카오 상담';kakao.dataset.event='consultation_click';kakao.className='finder-cta-sub';
  const reserve=kakao.cloneNode(true);reserve.textContent='방문 예약하기';reserve.dataset.event='reservation_click';reserve.className='finder-cta-reserve';actions.append(opening,kakao,reserve);hero.append(actions);
}
document.querySelectorAll('[data-event]').forEach(a=>a.addEventListener('click',()=>{if(typeof gtag==='function')gtag('event',a.dataset.event,{event_category:'conversion',event_label:location.pathname});}));
const top=document.querySelector('header .topbtn');if(top)top.addEventListener('click',()=>{if(typeof gtag==='function')gtag('event','consultation_click',{event_category:'conversion',event_label:location.pathname});});
fillCities();setKind('all');
})();
