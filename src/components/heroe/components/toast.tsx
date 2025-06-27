export function HeroeToast({
  visible,
  message,
}: {
  visible: boolean;
  message: string;
}) {
  if (!visible) {
    return <></>;
  }

  return (
    <div className="toast-container position-fixed bottom-0 end-0 p-3">
      <div
        id="heroeToast"
        className="toast text-bg-secondary show"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-body">{message}</div>
      </div>
    </div>
  );
}
