import { Suspense } from "react";
import SignupPage from "app/components/SignupPage";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<div className="text-center p-20">جارٍ التحميل...</div>}>
        <SignupPage />
      </Suspense>
    </main>
  );
}
