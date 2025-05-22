function Header() {
  return (
    <div className="flex items-center space-x-4 p-4 bg-zinc-800  shadow-sm">
      {/* Аватар */}
      <div className="w-48 h-48 rounded-full bg-gray-300 flex items-center justify-center">
        <span className="text-gray-600 text-6xl">M</span>
      </div>

      {/* Информация профиля */}
      <div className="flex-1">
        <div className="text-sm text-white ml-1">Profile</div>
        <div className="font-bold text-white text-6xl">Makallo</div>
      </div>
    </div>
  );
}

export default Header;
