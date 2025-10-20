type EmailTemplateProps = {
  firstName: string;
  content: string;
};

export function EmailTemplate({ firstName, content }: EmailTemplateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 gap-5">
      <h1>{firstName}!</h1>
      <span>{content}</span>
    </div>
  );
}