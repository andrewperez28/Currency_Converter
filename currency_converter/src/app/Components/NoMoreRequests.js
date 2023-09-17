export default function NoMoreRequests() {
  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-yellow-500 font-bold italic text-3xl p-4">
          This website is currently offline to being out of API requests. Please
          come back later once the remaining requests amount has been renewed.
        </h1>
      </div>
    </>
  );
}
