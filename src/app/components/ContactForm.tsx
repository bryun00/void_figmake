import { FormEvent, useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzepzjlb";

type Variant = "desktop" | "mobile";
type Status = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full bg-transparent border-none outline-none font-['Manrope',sans-serif] font-semibold text-[14px] text-[#161513] placeholder:text-[#bfbbad] placeholder:font-semibold p-0 m-0";

function FieldShell({
  children,
  variant,
  tall,
}: {
  children: React.ReactNode;
  variant: Variant;
  tall?: boolean;
}) {
  if (variant === "mobile") {
    return (
      <div
        className={`content-stretch flex relative shrink-0 w-full py-[12px] ${
          tall ? "h-[100px] items-start" : "h-[54px] items-center"
        }`}
        data-name="input-box"
      >
        <div aria-hidden className="absolute border-[#e5e0d0] border-b border-solid inset-0 pointer-events-none" />
        {children}
      </div>
    );
  }

  return (
    <div
      className={`content-stretch flex items-start relative shrink-0 w-full py-[20px] ${
        tall ? "h-[200px]" : ""
      }`}
    >
      <div aria-hidden className="absolute border-[#e5e0d0] border-b border-solid inset-0 pointer-events-none" />
      {children}
    </div>
  );
}

export default function ContactForm({ variant }: { variant: Variant }) {
  const [status, setStatus] = useState<Status>("idle");
  const isDesktop = variant === "desktop";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error("submit failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const labelClass = isDesktop
    ? "[word-break:break-word] font-['Geist_Mono',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#161513] text-[14px] w-[80px]"
    : "[word-break:break-word] font-['Space_Grotesk',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#161513] text-[12px] tracking-[0.006px] uppercase whitespace-nowrap";

  const fieldGap = isDesktop ? "gap-[24px] py-[16px]" : "gap-[8px]";

  return (
    <form
      onSubmit={handleSubmit}
      className={`content-stretch flex flex-col items-start relative shrink-0 w-full ${
        isDesktop ? "flex-[1_0_0] min-w-px gap-[32px] justify-center" : "gap-[24px]"
      }`}
      data-name="contact-form"
    >
      <input type="hidden" name="_subject" value="Portfolio contact" />
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />

      <div className={`content-stretch flex flex-col items-start relative shrink-0 w-full ${fieldGap}`}>
        <p className={labelClass}>Email</p>
        <FieldShell variant={variant}>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            placeholder="답장 받으실 이메일 주소를 남겨주세요"
            className={inputClass}
          />
        </FieldShell>
      </div>

      <div className={`content-stretch flex flex-col items-start relative shrink-0 w-full ${fieldGap}`}>
        <p className={labelClass}>Name</p>
        <FieldShell variant={variant}>
          <input
            required
            type="text"
            name="name"
            autoComplete="name"
            placeholder="성함을 남겨주세요"
            className={inputClass}
          />
        </FieldShell>
      </div>

      <div className={`content-stretch flex flex-col items-start relative shrink-0 w-full ${fieldGap}`}>
        <p className={labelClass}>Message</p>
        <FieldShell variant={variant} tall>
          <textarea
            required
            name="message"
            rows={isDesktop ? 6 : 3}
            placeholder="어떤 이야기든 편하게 남겨주세요"
            className={`${inputClass} resize-none h-full`}
          />
        </FieldShell>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className={
          isDesktop
            ? "content-stretch flex flex-col items-center justify-center p-[24px] relative shrink-0 w-[180px] cursor-pointer bg-transparent disabled:opacity-50 disabled:cursor-wait"
            : "relative rounded-[4px] shrink-0 w-full cursor-pointer bg-transparent border-none p-0 disabled:opacity-50 disabled:cursor-wait"
        }
        data-name="btn"
      >
        <div
          aria-hidden
          className={
            isDesktop
              ? "absolute border border-[#e4501d] border-solid inset-0 pointer-events-none"
              : "absolute border border-[#e4501d] border-solid inset-0 pointer-events-none rounded-[4px]"
          }
        />
        {isDesktop ? (
          <p className="[word-break:break-word] font-['Space_Grotesk',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#e4501d] text-[18px] whitespace-nowrap">
            {status === "sending" ? "Sending..." : "Send"}
          </p>
        ) : (
          <div className="flex flex-col items-center justify-center size-full">
            <div className="content-stretch flex flex-col items-center justify-center p-[16px] relative size-full">
              <p className="[word-break:break-word] font-['Space_Grotesk',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#e4501d] text-[18px] whitespace-nowrap">
                {status === "sending" ? "Sending..." : "Send"}
              </p>
            </div>
          </div>
        )}
      </button>

      {status === "success" && (
        <p className="font-['Pretendard',sans-serif] text-[14px] text-[#161513] leading-[1.5]">
          메시지가 전송되었습니다. 확인 후 답장드리겠습니다.
        </p>
      )}
      {status === "error" && (
        <p className="font-['Pretendard',sans-serif] text-[14px] text-[#e4501d] leading-[1.5]">
          전송에 실패했습니다. 잠시 후 다시 시도해주세요.
        </p>
      )}
    </form>
  );
}
