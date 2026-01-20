
import React from 'react';

const KaiCAL: React.FC = () => {
  return (
    <div className="fade-in py-16 md:py-24">
      <section className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h1 className="text-5xl font-bold tracking-tighter mb-6">KaiCA Learning Tech</h1>
          <p className="text-zinc-500 text-xl font-light">첨단 에듀테크 기술이 선사하는 새로운 차원의 K-컬처 교육 시스템을 경험하세요.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* AI Feature */}
          <div className="bg-zinc-50 p-12 rounded-[2.5rem] border border-zinc-100 flex flex-col gap-8">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-rose-600">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">AI 맞춤 학습 엔진</h2>
              <ul className="space-y-4 text-zinc-600">
                <li className="flex gap-3">
                  <span className="text-rose-500">✓</span>
                  <div>
                    <span className="font-bold text-zinc-900">AI 학습 경로 최적화:</span>
                    <p className="text-sm mt-1">학습자 데이터 분석을 통한 개인 맞춤형 교육 코스 설계 및 난이도 자동 조절</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-rose-500">✓</span>
                  <div>
                    <span className="font-bold text-zinc-900">실시간 성과 분석:</span>
                    <p className="text-sm mt-1">대시보드를 통한 진행 상황 모니터링 및 즉각적인 피드백 보고서 제공</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* XR Feature */}
          <div className="bg-zinc-900 text-white p-12 rounded-[2.5rem] flex flex-col gap-8">
            <div className="w-16 h-16 bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center text-rose-400">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">XR 몰입형 교육 환경</h2>
              <ul className="space-y-4 text-zinc-400">
                <li className="flex gap-3">
                  <span className="text-rose-400">✓</span>
                  <div>
                    <span className="font-bold text-white">VR K-POP 댄스 스튜디오:</span>
                    <p className="text-sm mt-1">동작의 정확도를 AI 피드백 시스템으로 측정하여 85% 이상의 높은 몰입감 제공</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-rose-400">✓</span>
                  <div>
                    <span className="font-bold text-white">AR 뷰티 메이크업 튜토리얼:</span>
                    <p className="text-sm mt-1">얼굴 인식 기술로 다양한 메이크업 톤과 스타일을 가상으로 체험</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Business Strategy Integration */}
        <div className="mt-32 border-t border-zinc-100 pt-16">
          <h2 className="text-2xl font-bold mb-12">통합 운영 관리 시스템</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "실시간 협업 학습", desc: "한국-해외 학습자 실시간 연결 수업" },
              { title: "모듈형 교육 프로그램", desc: "30분~2시간 단위 맞춤형 패키지" },
              { title: "적응형 평가 시스템", desc: "AI 기반 스마트 평가 및 최적화" },
              { title: "교육 데이터 시각화", desc: "데이터 기반 전략 수립 및 피드백" }
            ].map((item, idx) => (
              <div key={idx} className="p-6 border border-zinc-100 rounded-2xl hover:bg-zinc-50 transition-colors">
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default KaiCAL;
