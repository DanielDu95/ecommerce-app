// app/profile/page.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Image from "next/image";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/signin"); // Redirect to login if not authenticated
  }

  const { user } = session;

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-2xl">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
      <div className="flex items-center space-x-6">
        {user.image && (
          <Image
            src={user.image}
            alt={user.name ?? "Profile"}
            width={80}
            height={80}
            className="rounded-full"
          />
        )}
        <div>
          <p className="text-xl font-semibold">{user.name}</p>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>
    </div>
  );
}
