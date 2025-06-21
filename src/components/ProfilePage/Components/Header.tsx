import { AuthService } from "@/services/auth.service";
import { UserService } from "@/services/user.service";
import { IUser, IUserData } from "@/types";
import { useEffect, useState } from "react";

function Header() {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await AuthService.getProfile();

        if (response) {
          setUser(response);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Ошибка при загрузке профиля", error);
        setUser(null);
      }
    }
    loadData();
  }, []);

  return (
    <div className="flex items-center space-x-4 p-4 bg-zinc-800  shadow-sm">
      {/* Аватар */}
      <div className="w-48 h-48 rounded-full bg-gray-300 flex items-center justify-center">
        <span className="text-gray-600 text-6xl">{user?.username[0]}</span>
      </div>

      {/* Информация профиля */}
      <div className="flex-1">
        <div className="text-sm text-white ml-1">Profile</div>
        <div className="font-bold text-white text-6xl">{user?.username}</div>
      </div>
    </div>
  );
}

export default Header;
