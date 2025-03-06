
export function LoadingIndicator() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-wastesense-gray-100">
      <div className="loader-ring text-wastesense-green">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
