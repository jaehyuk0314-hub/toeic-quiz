// 토익 단어 마스터 플랜 단어 데이터
// day: 일차, w: 단어, pos: 품사, ko: 뜻, ex: 예문(단어 원형 그대로 포함), exKo: 예문 해석
// 새 일차를 추가할 때는 이 배열 맨 아래에 이어서 붙이면 됩니다.
const WORDS = [
  // ── Day 1 · 채용·지원 (기본 50) ──
  { day: 1, w: "applicant", pos: "n.", ko: "지원자", ex: "Each applicant must submit two references.", exKo: "각 지원자는 추천서 두 부를 제출해야 한다." },
  { day: 1, w: "application", pos: "n.", ko: "지원(서), 신청", ex: "Please fill out the application form by Friday.", exKo: "금요일까지 지원서를 작성해 주세요." },
  { day: 1, w: "apply", pos: "v.", ko: "지원하다, 신청하다", ex: "She decided to apply for the marketing position.", exKo: "그녀는 마케팅 직에 지원하기로 했다." },
  { day: 1, w: "appoint", pos: "v.", ko: "임명하다", ex: "The board will appoint a new director next month.", exKo: "이사회는 다음 달 새 이사를 임명할 것이다." },
  { day: 1, w: "attach", pos: "v.", ko: "첨부하다", ex: "Please attach your resume to the email.", exKo: "이메일에 이력서를 첨부해 주세요." },
  { day: 1, w: "benefit", pos: "n.", ko: "혜택, 복리후생", ex: "The company offers a generous benefit package.", exKo: "회사는 넉넉한 복리후생 제도를 제공한다." },
  { day: 1, w: "candidate", pos: "n.", ko: "후보자, 지원자", ex: "The ideal candidate will have sales experience.", exKo: "이상적인 지원자는 영업 경력이 있을 것이다." },
  { day: 1, w: "compensation", pos: "n.", ko: "보상, 급여", ex: "Compensation will depend on experience.", exKo: "급여는 경력에 따라 결정된다." },
  { day: 1, w: "contract", pos: "n.", ko: "계약(서)", ex: "Please sign the contract and return it by Monday.", exKo: "계약서에 서명해 월요일까지 돌려주세요." },
  { day: 1, w: "cover letter", pos: "n.", ko: "자기소개서", ex: "A cover letter should be no longer than one page.", exKo: "자기소개서는 한 페이지를 넘지 않아야 한다." },
  { day: 1, w: "deadline", pos: "n.", ko: "마감 기한", ex: "The deadline for applications is May 31.", exKo: "지원 마감일은 5월 31일이다." },
  { day: 1, w: "decline", pos: "v.", ko: "거절하다; 감소하다", ex: "He had to decline the job offer.", exKo: "그는 일자리 제안을 거절해야 했다." },
  { day: 1, w: "department", pos: "n.", ko: "부서", ex: "She works in the accounting department.", exKo: "그녀는 회계 부서에서 일한다." },
  { day: 1, w: "eligible", pos: "adj.", ko: "자격이 있는", ex: "Employees are eligible for paid leave after six months.", exKo: "직원은 6개월 후 유급 휴가를 받을 자격이 생긴다." },
  { day: 1, w: "employ", pos: "v.", ko: "고용하다", ex: "The factory will employ 200 local workers.", exKo: "그 공장은 지역 근로자 200명을 고용할 것이다." },
  { day: 1, w: "employee", pos: "n.", ko: "직원", ex: "Every new employee receives a staff ID card.", exKo: "모든 신입 직원은 사원증을 받는다." },
  { day: 1, w: "employer", pos: "n.", ko: "고용주", ex: "Your employer must provide a safe workplace.", exKo: "고용주는 안전한 작업장을 제공해야 한다." },
  { day: 1, w: "employment", pos: "n.", ko: "고용, 취업", ex: "The job fair helps graduates find employment.", exKo: "채용 박람회는 졸업생의 취업을 돕는다." },
  { day: 1, w: "enclose", pos: "v.", ko: "동봉하다", ex: "Please enclose a copy of your certificate.", exKo: "자격증 사본을 동봉해 주세요." },
  { day: 1, w: "experience", pos: "n.", ko: "경험, 경력", ex: "The position requires three years of experience.", exKo: "그 직책은 3년 경력을 요구한다." },
  { day: 1, w: "experienced", pos: "adj.", ko: "경험 많은, 숙련된", ex: "We are looking for an experienced accountant.", exKo: "숙련된 회계사를 찾고 있다." },
  { day: 1, w: "fill", pos: "v.", ko: "(자리를) 채우다, 충원하다", ex: "We hope to fill the vacancy by next week.", exKo: "다음 주까지 공석을 충원하기를 바란다." },
  { day: 1, w: "hire", pos: "v.", ko: "고용하다", ex: "The store will hire extra staff for the holidays.", exKo: "그 가게는 연휴 기간에 추가 직원을 고용할 것이다." },
  { day: 1, w: "human resources", pos: "n.", ko: "인사부, 인적 자원", ex: "Send your questions to human resources.", exKo: "질문은 인사부로 보내세요." },
  { day: 1, w: "interview", pos: "n.", ko: "면접", ex: "Your interview is scheduled for 10 a.m.", exKo: "면접은 오전 10시로 잡혀 있다." },
  { day: 1, w: "interviewee", pos: "n.", ko: "면접 대상자", ex: "Each interviewee will meet two managers.", exKo: "각 면접 대상자는 매니저 두 명을 만나게 된다." },
  { day: 1, w: "interviewer", pos: "n.", ko: "면접관", ex: "The interviewer asked about my previous job.", exKo: "면접관이 내 이전 직장에 대해 물었다." },
  { day: 1, w: "negotiate", pos: "v.", ko: "협상하다", ex: "You can negotiate your salary after the offer.", exKo: "제안을 받은 후 연봉을 협상할 수 있다." },
  { day: 1, w: "offer", pos: "n.", ko: "제안", ex: "She accepted the job offer immediately.", exKo: "그녀는 일자리 제안을 즉시 받아들였다." },
  { day: 1, w: "opening", pos: "n.", ko: "공석, 빈자리", ex: "There is an opening in the sales team.", exKo: "영업팀에 공석이 하나 있다." },
  { day: 1, w: "orientation", pos: "n.", ko: "오리엔테이션, 예비 교육", ex: "New hires must attend a one-day orientation.", exKo: "신입 사원은 하루짜리 오리엔테이션에 참석해야 한다." },
  { day: 1, w: "permanent", pos: "adj.", ko: "정규의, 영구적인", ex: "After the trial period, she got a permanent position.", exKo: "시용 기간 후 그녀는 정규직이 되었다." },
  { day: 1, w: "personnel", pos: "n.", ko: "직원들, 인사과", ex: "All personnel must wear safety helmets.", exKo: "모든 직원은 안전모를 착용해야 한다." },
  { day: 1, w: "position", pos: "n.", ko: "직책, 일자리", ex: "He applied for a position at the bank.", exKo: "그는 은행의 한 직책에 지원했다." },
  { day: 1, w: "probation", pos: "n.", ko: "수습 기간", ex: "New staff are on probation for three months.", exKo: "신입 직원은 3개월간 수습 기간을 거친다." },
  { day: 1, w: "promote", pos: "v.", ko: "승진시키다; 홍보하다", ex: "The company plans to promote her to team leader.", exKo: "회사는 그녀를 팀장으로 승진시킬 계획이다." },
  { day: 1, w: "promotion", pos: "n.", ko: "승진; 판촉", ex: "He received a promotion after two years.", exKo: "그는 2년 후 승진했다." },
  { day: 1, w: "qualification", pos: "n.", ko: "자격 (요건)", ex: "A degree in finance is the minimum qualification.", exKo: "재무 학위가 최소 자격 요건이다." },
  { day: 1, w: "qualified", pos: "adj.", ko: "자격을 갖춘", ex: "Only qualified applicants will be contacted.", exKo: "자격을 갖춘 지원자에게만 연락한다." },
  { day: 1, w: "recommendation", pos: "n.", ko: "추천(서)", ex: "Please include a letter of recommendation.", exKo: "추천서를 포함해 주세요." },
  { day: 1, w: "recruit", pos: "v.", ko: "모집하다, 채용하다", ex: "We plan to recruit ten engineers this year.", exKo: "올해 엔지니어 10명을 채용할 계획이다." },
  { day: 1, w: "reference", pos: "n.", ko: "추천인, 추천서; 참고", ex: "Please provide the name of one reference.", exKo: "추천인 한 명의 이름을 적어 주세요." },
  { day: 1, w: "require", pos: "v.", ko: "요구하다, 필요로 하다", ex: "All positions require basic computer skills.", exKo: "모든 직책은 기본 컴퓨터 능력을 요구한다." },
  { day: 1, w: "requirement", pos: "n.", ko: "요건, 필요조건", ex: "Fluency in English is a requirement for this job.", exKo: "영어 능통은 이 일의 필수 요건이다." },
  { day: 1, w: "resign", pos: "v.", ko: "사임하다, 사직하다", ex: "He will resign from his post next month.", exKo: "그는 다음 달 직책에서 사임할 것이다." },
  { day: 1, w: "resume", pos: "n.", ko: "이력서", ex: "Send your resume to the address below.", exKo: "이력서를 아래 주소로 보내세요." },
  { day: 1, w: "salary", pos: "n.", ko: "급여, 연봉", ex: "The starting salary is competitive.", exKo: "초봉은 경쟁력 있는 수준이다." },
  { day: 1, w: "screen", pos: "v.", ko: "(지원자를) 심사하다, 선별하다", ex: "The HR team will screen all applications first.", exKo: "인사팀이 먼저 모든 지원서를 심사한다." },
  { day: 1, w: "seek", pos: "v.", ko: "찾다, 구하다", ex: "We seek a motivated person to join our team.", exKo: "우리 팀에 합류할 의욕 있는 사람을 찾고 있다." },
  { day: 1, w: "submit", pos: "v.", ko: "제출하다", ex: "Please submit your documents by Friday.", exKo: "금요일까지 서류를 제출해 주세요." },

  // ── Day 1 · ★★★ 보충 12 ──
  { day: 1, w: "credentials", pos: "n.", ko: "자격 증명(서), 자격", ex: "Please bring your academic credentials to the interview.", exKo: "면접에 학력 증명서를 가져오세요." },
  { day: 1, w: "discretion", pos: "n.", ko: "재량, 신중함", ex: "Bonuses are paid at the manager's discretion.", exKo: "보너스는 관리자 재량으로 지급된다." },
  { day: 1, w: "mandatory", pos: "adj.", ko: "의무적인, 필수의", ex: "Attendance at the safety training is mandatory.", exKo: "안전 교육 참석은 의무다." },
  { day: 1, w: "prerequisite", pos: "n.", ko: "필수 조건, 전제 조건", ex: "A driver's license is a prerequisite for this job.", exKo: "운전면허는 이 일의 필수 조건이다." },
  { day: 1, w: "proficiency", pos: "n.", ko: "능숙함, 숙달", ex: "Proficiency in Excel is required.", exKo: "엑셀 능숙도가 요구된다." },
  { day: 1, w: "proficient", pos: "adj.", ko: "능숙한", ex: "Applicants must be proficient in Spanish.", exKo: "지원자는 스페인어에 능숙해야 한다." },
  { day: 1, w: "prospective", pos: "adj.", ko: "장래의, 예비의", ex: "We met with several prospective employees.", exKo: "여러 예비 직원들과 만났다." },
  { day: 1, w: "retain", pos: "v.", ko: "보유하다, 유지하다", ex: "The company works hard to retain skilled workers.", exKo: "회사는 숙련된 직원을 붙잡아 두려고 노력한다." },
  { day: 1, w: "retention", pos: "n.", ko: "보유, (직원) 유지", ex: "Employee retention improved after the pay raise.", exKo: "임금 인상 후 직원 유지율이 개선됐다." },
  { day: 1, w: "solicit", pos: "v.", ko: "요청하다, 구하다", ex: "The manager will solicit feedback from staff.", exKo: "매니저가 직원들에게 의견을 요청할 것이다." },
  { day: 1, w: "terminate", pos: "v.", ko: "종료하다, 해고하다", ex: "Either party may terminate the contract with notice.", exKo: "어느 쪽이든 통지 후 계약을 종료할 수 있다." },
  { day: 1, w: "termination", pos: "n.", ko: "종료, 해고", ex: "Termination of the lease requires 30 days' notice.", exKo: "임대 계약 해지에는 30일 전 통지가 필요하다." },

  // ── Day 2 · 사무·업무 환경 (2026-09-23) ──
  { day: 2, w: "equipment", pos: "n.", ko: "장비, 기기", ex: "Please report any faulty office equipment to the front desk.", exKo: "고장 난 사무 장비는 안내 데스크에 알려 주십시오." }, // 예문 작성
  { day: 2, w: "supply", pos: "n./v.", ko: "용품; 공급하다", ex: "Our company will supply laptops to all new employees.", exKo: "우리 회사는 모든 신입 직원에게 노트북을 지급할 것이다." }, // 예문 작성
  { day: 2, w: "schedule", pos: "n./v.", ko: "일정(을 잡다)", ex: "The project is two weeks behind schedule.", exKo: "그 프로젝트는 예정보다 2주 늦어지고 있다." }, // 예문 작성
  { day: 2, w: "copy", pos: "n./v.", ko: "사본; 복사하다", ex: "Please bring a hard copy of the report to the meeting.", exKo: "회의에 보고서 출력본을 한 부 가져오세요." }, // 예문 작성
  { day: 2, w: "notice", pos: "n.", ko: "공지, 통지", ex: "The office will be closed until further notice.", exKo: "사무실은 추후 공지가 있을 때까지 문을 닫는다." }, // 예문 작성
  { day: 2, w: "arrange", pos: "v.", ko: "준비하다, 마련하다", ex: "Could you arrange a meeting with the sales team?", exKo: "영업팀과의 회의를 잡아 주시겠어요?" }, // 예문 작성
  { day: 2, w: "procedure", pos: "n.", ko: "절차", ex: "All visitors must follow the proper check-in procedure.", exKo: "모든 방문객은 정해진 입실 절차를 따라야 한다." }, // 예문 작성
  { day: 2, w: "policy", pos: "n.", ko: "정책, 방침", ex: "The company policy on overtime was updated last month.", exKo: "초과 근무에 관한 회사 방침이 지난달 개정되었다." }, // 예문 작성
  { day: 2, w: "attend", pos: "v.", ko: "참석하다", ex: "All managers are expected to attend the seminar on Friday.", exKo: "모든 관리자는 금요일 세미나에 참석해야 한다." }, // 예문 작성
  { day: 2, w: "attendance", pos: "n.", ko: "출석, 참석(률)", ex: "Attendance at the safety training is mandatory.", exKo: "안전 교육 참석은 의무이다." }, // 예문 작성
  { day: 2, w: "assign", pos: "v.", ko: "배정하다, 할당하다", ex: "The manager will assign a new task to each team member.", exKo: "관리자가 팀원마다 새 업무를 배정할 것이다." }, // 예문 작성
  { day: 2, w: "assignment", pos: "n.", ko: "배정된 업무, 과제", ex: "Mr. Park is in Tokyo on a temporary assignment.", exKo: "박 씨는 임시 업무를 맡아 도쿄에 가 있다." }, // 예문 작성
  { day: 2, w: "duty", pos: "n.", ko: "직무, 업무", ex: "Ms. Lee is on duty until 6 P.M.", exKo: "이 씨는 오후 6시까지 근무 중이다." },
  { day: 2, w: "handle", pos: "v.", ko: "처리하다, 다루다", ex: "Ms. Yoon will handle all customer inquiries this week.", exKo: "이번 주에는 윤 씨가 모든 고객 문의를 처리한다." }, // 예문 작성
  { day: 2, w: "process", pos: "v./n.", ko: "처리하다 / 과정", ex: "It takes three days to process a refund request.", exKo: "환불 요청을 처리하는 데 사흘이 걸린다." },
  { day: 2, w: "request", pos: "n./v.", ko: "요청(하다)", ex: "The files were sent at the request of the client.", exKo: "그 파일들은 고객의 요청으로 발송되었다." }, // 예문 작성
  { day: 2, w: "approve", pos: "v.", ko: "승인하다", ex: "The board is expected to approve the proposal tomorrow.", exKo: "이사회가 내일 그 제안을 승인할 것으로 예상된다." }, // 예문 작성
  { day: 2, w: "approval", pos: "n.", ko: "승인", ex: "The new budget is still pending approval.", exKo: "새 예산은 아직 승인 대기 중이다." }, // 예문 작성
  { day: 2, w: "revise", pos: "v.", ko: "수정하다, 개정하다", ex: "We had to revise the schedule after the delay.", exKo: "지연 때문에 일정을 수정해야 했다." }, // 예문 작성
  { day: 2, w: "revision", pos: "n.", ko: "수정(본), 개정", ex: "The final revision of the contract is attached.", exKo: "계약서 최종 수정본을 첨부합니다." }, // 예문 작성
  { day: 2, w: "confirm", pos: "v.", ko: "확인하다, 확정하다", ex: "Please confirm your attendance by replying to this e-mail.", exKo: "이 이메일에 회신하여 참석 여부를 확정해 주세요." }, // 예문 작성
  { day: 2, w: "confirmation", pos: "n.", ko: "확인(서)", ex: "You will receive a confirmation e-mail within an hour.", exKo: "한 시간 안에 확인 이메일을 받게 됩니다." }, // 예문 작성
  { day: 2, w: "postpone", pos: "v.", ko: "연기하다", ex: "We decided to postpone the launch until next week.", exKo: "출시를 다음 주로 연기하기로 했다." }, // 예문 작성
  { day: 2, w: "extend", pos: "v.", ko: "연장하다, 늘리다", ex: "The manager agreed to extend the deadline by two days.", exKo: "관리자는 마감을 이틀 연장해 주기로 했다." }, // 예문 작성
  { day: 2, w: "extension", pos: "n.", ko: "연장; 내선 번호", ex: "You can reach me at extension 204.", exKo: "내선 204번으로 연락하시면 됩니다." },
  { day: 2, w: "maintain", pos: "v.", ko: "유지하다, 정비하다", ex: "It is important to maintain accurate records of all expenses.", exKo: "모든 지출 내역을 정확하게 기록해 두는 것이 중요하다." }, // 예문 작성
  { day: 2, w: "maintenance", pos: "n.", ko: "유지 보수, 정비", ex: "The elevator will be closed for scheduled maintenance.", exKo: "엘리베이터는 정기 점검으로 운행이 중단된다." }, // 예문 작성
  { day: 2, w: "install", pos: "v.", ko: "설치하다", ex: "A technician will install new software on your computer.", exKo: "기술자가 컴퓨터에 새 소프트웨어를 설치할 것이다." }, // 예문 작성
  { day: 2, w: "replace", pos: "v.", ko: "교체하다, 대체하다", ex: "We need to replace the defective part as soon as possible.", exKo: "결함이 있는 부품을 최대한 빨리 교체해야 한다." }, // 예문 작성
  { day: 2, w: "supervisor", pos: "n.", ko: "상사, 감독자", ex: "Please report any problems to your supervisor.", exKo: "문제가 있으면 상사에게 보고하십시오." }, // 예문 작성
  { day: 2, w: "colleague", pos: "n.", ko: "동료", ex: "I ran into a former colleague at the conference.", exKo: "학회에서 예전 동료를 우연히 만났다." }, // 예문 작성
  { day: 2, w: "shift", pos: "n.", ko: "교대 근무(조)", ex: "Mr. Choi usually works the night shift.", exKo: "최 씨는 보통 야간 근무를 한다." }, // 예문 작성
  { day: 2, w: "adhere", pos: "v.", ko: "준수하다; 들러붙다", ex: "All staff must adhere to the revised dress code.", exKo: "전 직원은 개정된 복장 규정을 준수해야 한다." },
  { day: 2, w: "comply", pos: "v.", ko: "준수하다, 따르다", ex: "The factory must comply with local safety regulations.", exKo: "그 공장은 지역 안전 규정을 준수해야 한다." },
  { day: 2, w: "compliance", pos: "n.", ko: "준수, 따름", ex: "The report was filed in compliance with company policy.", exKo: "보고서는 회사 방침에 따라 제출되었다." },
  { day: 2, w: "designate", pos: "v.", ko: "지정하다, 지명하다", ex: "The manager will designate a replacement before she leaves.", exKo: "부장은 떠나기 전에 후임자를 지명할 것이다." },
  { day: 2, w: "designated", pos: "adj.", ko: "지정된", ex: "Please park only in the designated visitor area.", exKo: "지정된 방문객 구역에만 주차해 주십시오." },
  { day: 2, w: "implement", pos: "v.", ko: "시행하다, 실시하다", ex: "The firm will implement the new filing system next quarter.", exKo: "회사는 다음 분기에 새 문서 관리 시스템을 시행할 것이다." },
  { day: 2, w: "implementation", pos: "n.", ko: "시행, 실시", ex: "The implementation of the software has been delayed.", exKo: "소프트웨어 도입이 지연되었다." },
  { day: 2, w: "streamline", pos: "v.", ko: "간소화하다, 능률화하다", ex: "The new form streamlines the approval process.", exKo: "새 양식이 승인 절차를 간소화한다." },
  { day: 2, w: "expedite", pos: "v.", ko: "신속히 처리하다", ex: "Please expedite the request; the client is waiting.", exKo: "요청을 신속히 처리해 주세요. 고객이 기다리고 있습니다." },
  { day: 2, w: "delegate", pos: "v.", ko: "위임하다, 맡기다", ex: "Good managers delegate routine tasks to their staff.", exKo: "유능한 관리자는 일상 업무를 직원에게 위임한다." },
  { day: 2, w: "oversee", pos: "v.", ko: "감독하다, 총괄하다", ex: "Mr. Han oversees daily operations at the Busan branch.", exKo: "한 씨는 부산 지점의 일상 운영을 총괄한다." },
  { day: 2, w: "facilitate", pos: "v.", ko: "용이하게 하다, 촉진하다", ex: "The new intranet facilitates communication between departments.", exKo: "새 인트라넷이 부서 간 소통을 원활하게 해 준다." },
  { day: 2, w: "consolidate", pos: "v.", ko: "통합하다, 합병하다", ex: "We plan to consolidate the two regional offices.", exKo: "두 지역 사무소를 통합할 계획이다." },
  { day: 2, w: "reimburse", pos: "v.", ko: "환급하다, 상환하다", ex: "The company will reimburse employees for travel expenses.", exKo: "회사는 직원에게 출장비를 환급해 준다." },
  { day: 2, w: "reimbursement", pos: "n.", ko: "환급, 상환", ex: "Submit the receipts with your reimbursement form.", exKo: "환급 신청서와 함께 영수증을 제출하십시오." },
  { day: 2, w: "prompt", pos: "adj./v.", ko: "신속한; 촉발하다", ex: "Thank you for your prompt reply to our inquiry.", exKo: "문의에 신속히 답변해 주셔서 감사합니다." },
  { day: 2, w: "promptly", pos: "adv.", ko: "즉시, 신속히", ex: "Please respond promptly to the employee survey.", exKo: "직원 설문에 즉시 응답해 주십시오." },
  { day: 2, w: "tentative", pos: "adj.", ko: "잠정적인, 임시의", ex: "The schedule is tentative and subject to change.", exKo: "일정은 잠정적이며 변경될 수 있습니다." },

  // ── Day 3 · 인사·평가·교육 (2026-09-24) ──
  { day: 3, w: "training", pos: "n.", ko: "교육, 연수", ex: "All new employees must attend a training session on Monday.", exKo: "모든 신입 사원은 월요일 교육에 참석해야 한다." }, // 예문 작성
  { day: 3, w: "skill", pos: "n.", ko: "기술, 역량", ex: "Leadership is an important skill for any manager.", exKo: "리더십은 모든 관리자에게 중요한 역량이다." }, // 예문 작성
  { day: 3, w: "staff", pos: "n.", ko: "직원(들)", ex: "All staff members must wear their ID badges.", exKo: "모든 직원은 사원증을 착용해야 한다." }, // 예문 작성
  { day: 3, w: "improve", pos: "v.", ko: "개선하다, 향상시키다", ex: "The new software will help us improve productivity.", exKo: "새 소프트웨어는 생산성 향상에 도움이 될 것이다." }, // 예문 작성
  { day: 3, w: "workshop", pos: "n.", ko: "워크숍, 연수회", ex: "The marketing team will conduct a workshop for new hires.", exKo: "마케팅팀이 신입 사원을 위한 워크숍을 진행할 것이다." }, // 예문 작성
  { day: 3, w: "leave", pos: "n.", ko: "휴가, 휴직", ex: "Ms. Han is on leave until the end of the month.", exKo: "한 씨는 이달 말까지 휴가 중이다." }, // 예문 작성
  { day: 3, w: "performance", pos: "n.", ko: "실적, 성과; 공연", ex: "Your manager will conduct a performance review in June.", exKo: "6월에 관리자가 성과 평가를 실시할 것이다." }, // 예문 작성
  { day: 3, w: "evaluate", pos: "v.", ko: "평가하다", ex: "The committee will evaluate each applicant carefully.", exKo: "위원회가 지원자를 한 명씩 꼼꼼히 평가할 것이다." }, // 예문 작성
  { day: 3, w: "evaluation", pos: "n.", ko: "평가", ex: "Every employee receives an annual evaluation in December.", exKo: "모든 직원은 12월에 연례 평가를 받는다." }, // 예문 작성
  { day: 3, w: "assess", pos: "v.", ko: "평가하다, 가늠하다", ex: "We need to assess the impact of the new policy.", exKo: "새 방침의 영향을 평가해야 한다." }, // 예문 작성
  { day: 3, w: "assessment", pos: "n.", ko: "평가, 사정", ex: "Applicants must complete a skills assessment.", exKo: "지원자는 역량 평가를 거쳐야 한다." }, // 예문 작성
  { day: 3, w: "review", pos: "n./v.", ko: "검토(하다); 평가", ex: "Your application is currently under review.", exKo: "귀하의 지원서는 현재 검토 중입니다." }, // 예문 작성
  { day: 3, w: "feedback", pos: "n.", ko: "피드백, 의견", ex: "The instructor provided constructive feedback on our presentations.", exKo: "강사가 우리 발표에 대해 건설적인 피드백을 주었다." }, // 예문 작성
  { day: 3, w: "achieve", pos: "v.", ko: "달성하다, 이루다", ex: "The sales team worked hard to achieve its annual target.", exKo: "영업팀은 연간 목표를 달성하려고 열심히 일했다." }, // 예문 작성
  { day: 3, w: "achievement", pos: "n.", ko: "성취, 업적", ex: "Winning the contract was an outstanding achievement.", exKo: "그 계약을 따낸 것은 뛰어난 성과였다." }, // 예문 작성
  { day: 3, w: "award", pos: "n./v.", ko: "상; 수여하다", ex: "Ms. Lim received an award for her innovative design.", exKo: "임 씨는 혁신적인 디자인으로 상을 받았다." }, // 예문 작성
  { day: 3, w: "recognize", pos: "v.", ko: "인정하다, 표창하다", ex: "The company wants to recognize employees for their hard work.", exKo: "회사는 직원들의 노고를 인정해 주고 싶어 한다." }, // 예문 작성
  { day: 3, w: "recognition", pos: "n.", ko: "인정, 표창", ex: "He received a plaque in recognition of twenty years of service.", exKo: "그는 20년 근속을 인정받아 상패를 받았다." },
  { day: 3, w: "contribute", pos: "v.", ko: "기여하다, 공헌하다", ex: "Everyone is encouraged to contribute ideas to the project.", exKo: "모두가 프로젝트에 아이디어를 내도록 권장된다." }, // 예문 작성
  { day: 3, w: "contribution", pos: "n.", ko: "기여, 공헌", ex: "Thank you for your valuable contribution to the team.", exKo: "팀에 귀중한 기여를 해 주셔서 감사합니다." }, // 예문 작성
  { day: 3, w: "dedicate", pos: "v.", ko: "헌신하다, 전념하다", ex: "She has dedicated herself to improving workplace safety.", exKo: "그녀는 직장 안전 개선에 헌신해 왔다." },
  { day: 3, w: "dedicated", pos: "adj.", ko: "헌신적인; 전담의", ex: "We have a dedicated team that deals with customer complaints.", exKo: "고객 불만을 전담하는 팀이 있다." }, // 예문 작성
  { day: 3, w: "enroll", pos: "v.", ko: "등록하다, 가입하다", ex: "Employees can enroll in a free language course.", exKo: "직원들은 무료 어학 강좌에 등록할 수 있다." }, // 예문 작성
  { day: 3, w: "enrollment", pos: "n.", ko: "등록, 가입", ex: "Enrollment is limited to twenty people.", exKo: "등록 인원은 20명으로 제한된다." }, // 예문 작성
  { day: 3, w: "register", pos: "v.", ko: "등록하다, 신청하다", ex: "Please register for the seminar by Friday.", exKo: "금요일까지 세미나에 등록해 주세요." }, // 예문 작성
  { day: 3, w: "registration", pos: "n.", ko: "등록, 접수", ex: "The registration fee includes lunch and materials.", exKo: "등록비에는 점심과 자료가 포함되어 있다." }, // 예문 작성
  { day: 3, w: "participate", pos: "v.", ko: "참가하다", ex: "About fifty employees will participate in the workshop.", exKo: "직원 약 50명이 워크숍에 참가할 것이다." }, // 예문 작성
  { day: 3, w: "participant", pos: "n.", ko: "참가자", ex: "Each participant will receive a certificate at the end.", exKo: "참가자 전원은 마지막에 수료증을 받는다." }, // 예문 작성
  { day: 3, w: "instructor", pos: "n.", ko: "강사, 교관", ex: "The course is taught by a certified instructor.", exKo: "그 강좌는 자격을 갖춘 강사가 가르친다." }, // 예문 작성
  { day: 3, w: "session", pos: "n.", ko: "시간, 회기", ex: "The training includes a two-hour session on safety.", exKo: "교육에는 안전에 관한 두 시간짜리 강의가 포함된다." }, // 예문 작성
  { day: 3, w: "certificate", pos: "n.", ko: "증명서, 수료증", ex: "You will receive a certificate of completion after the course.", exKo: "과정을 마치면 수료증을 받게 됩니다." }, // 예문 작성
  { day: 3, w: "absence", pos: "n.", ko: "부재, 결근", ex: "In the absence of the supervisor, Mr. Kim will lead the meeting.", exKo: "상사가 부재중일 때는 김 씨가 회의를 진행한다." },
  { day: 3, w: "appraisal", pos: "n.", ko: "(인사) 평가, 사정", ex: "Each employee receives an annual performance appraisal.", exKo: "직원은 매년 인사 평가를 받는다." },
  { day: 3, w: "incentive", pos: "n.", ko: "장려금, 유인책", ex: "The company offers financial incentives for meeting sales goals.", exKo: "회사는 판매 목표 달성에 대해 장려금을 지급한다." },
  { day: 3, w: "morale", pos: "n.", ko: "사기, 의욕", ex: "The new flexible hours have boosted employee morale.", exKo: "새 탄력 근무제가 직원 사기를 높였다." },
  { day: 3, w: "mentor", pos: "n./v.", ko: "멘토; 지도하다", ex: "Senior staff mentor new hires during their first month.", exKo: "선임 직원이 첫 달 동안 신입을 지도한다." },
  { day: 3, w: "competent", pos: "adj.", ko: "유능한, 능숙한", ex: "She is a highly competent project manager.", exKo: "그녀는 매우 유능한 프로젝트 관리자다." },
  { day: 3, w: "competence", pos: "n.", ko: "능력, 역량", ex: "The exam measures technical competence in three areas.", exKo: "이 시험은 세 영역의 기술 역량을 측정한다." },
  { day: 3, w: "diligent", pos: "adj.", ko: "근면한, 성실한", ex: "He is known as a diligent and reliable worker.", exKo: "그는 성실하고 믿을 만한 직원으로 알려져 있다." },
  { day: 3, w: "diligently", pos: "adv.", ko: "성실히, 부지런히", ex: "The team worked diligently to meet the deadline.", exKo: "팀은 마감을 맞추려 부지런히 일했다." },
  { day: 3, w: "exemplary", pos: "adj.", ko: "모범적인, 훌륭한", ex: "Ms. Cho was honored for her exemplary customer service.", exKo: "조 씨는 모범적인 고객 응대로 표창을 받았다." },
  { day: 3, w: "commend", pos: "v.", ko: "칭찬하다, 표창하다", ex: "The director commended the staff for their quick response.", exKo: "이사는 직원들의 신속한 대응을 칭찬했다." },
  { day: 3, w: "commendable", pos: "adj.", ko: "칭찬할 만한", ex: "The volunteers made a commendable effort.", exKo: "자원봉사자들은 칭찬할 만한 노력을 기울였다." },
  { day: 3, w: "accommodate", pos: "v.", ko: "수용하다, 편의를 봐주다", ex: "We will try to accommodate your scheduling requests.", exKo: "일정 요청을 최대한 맞춰 드리겠습니다." },
  { day: 3, w: "accommodation", pos: "n.", ko: "편의 제공; 숙박 시설", ex: "Accommodations will be arranged for out-of-town participants.", exKo: "외지 참가자에게는 숙박이 제공된다." },
  { day: 3, w: "eligibility", pos: "n.", ko: "자격 (요건)", ex: "Please review the eligibility requirements before applying.", exKo: "지원 전에 자격 요건을 확인하십시오." },
  { day: 3, w: "supplementary", pos: "adj.", ko: "보충의, 추가의", ex: "Supplementary materials are available on the intranet.", exKo: "보충 자료는 사내망에서 받을 수 있습니다." },
  { day: 3, w: "aptitude", pos: "n.", ko: "적성, 소질", ex: "All candidates must take an aptitude test.", exKo: "모든 지원자는 적성 검사를 받아야 한다." },
  { day: 3, w: "attribute", pos: "v.", ko: "~의 덕분으로 보다", ex: "The manager attributes the growth to the new marketing team.", exKo: "부장은 성장을 새 마케팅 팀 덕분으로 본다." },
  { day: 3, w: "attentive", pos: "adj.", ko: "주의 깊은, 세심한", ex: "Our staff is attentive to every detail.", exKo: "저희 직원은 모든 세부 사항에 세심합니다." },
];
