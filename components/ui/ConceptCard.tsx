export default function ConceptCard() {
  return (
    <div className="w-full rounded-3xl border border-gray-200 bg-gray-50/80 p-6 shadow-sm space-y-6 text-left">
      <section>
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
          자료 구조 비유
        </p>
        <p className="mt-2 text-base leading-relaxed text-gray-700">
          자바의 <span className="font-semibold text-gray-900">리스트, 맵(힙)</span> ↔
          프롬프트(커맨드: CLI)의{" "}
          <span className="font-semibold text-gray-900">스택</span>
          <span className="text-sm text-gray-500"> (접시, 위에꺼 먼저 씀)</span>,
          <span className="font-semibold text-gray-900"> 큐</span>
          <span className="text-sm text-gray-500">
            {" "}
            (FIFO - 피포, 먼저 온놈이 먼저 타는거, 선입선출)
          </span>
        </p>
      </section>

      <section className="border-t border-gray-200 pt-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
          행동 패턴
        </p>
        <p className="mt-2 text-base leading-relaxed text-gray-700">
          <span className="font-semibold text-gray-900">커맨드 패턴</span> :
          만든걸 객체로 만들고 사용만 하게 하는 것 , Git git = new Git 깃을 우리가 쓸때 실제 인스턴스만 가져와서 쓰는 것 처럼 하는게 패턴.
        </p>
      </section>
    </div>
  );
}

