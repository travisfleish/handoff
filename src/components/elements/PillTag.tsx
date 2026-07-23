function PillTag({ text }: { text: string }) {
  return (
    <span
      className="text-[9px] ml-2 rounded-full bg-blue px-[10px] pb-[.3rem] pt-[.4rem] font-semibold !leading-none text-white"
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
}

export default PillTag;
