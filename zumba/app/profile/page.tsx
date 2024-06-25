import Header from '../header';

export default function ProfilePage() {
  const userData = {
    username: "DanceMaster123",
    xp: 15000,
    level: 25,
    topLevels: [
      { name: "Salsa Frenzy", xp: 3000 },
      { name: "Hip Hop Heaven", xp: 2500 },
      { name: "Ballroom Blitz", xp: 2000 },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="pt-12 pb-6">
        <Header />
      </div>
      <main className="flex-grow flex flex-col items-center px-24">
        <div className="text-center w-full max-w-5xl">
          <h1 className="text-6xl font-bold mb-4">Profile</h1>
          <h2 className="text-3xl text-gray-600 mb-8">{userData.username}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
              <h2 className="mb-3 text-2xl font-semibold">XP</h2>
              <p className="m-0 text-3xl font-bold">{userData.xp}</p>
            </div>

            <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
              <h2 className="mb-3 text-2xl font-semibold">Level</h2>
              <p className="m-0 text-3xl font-bold">{userData.level}</p>
            </div>

            <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
              <h2 className="mb-3 text-2xl font-semibold">Top Levels</h2>
              <ul className="m-0 list-none p-0">
                {userData.topLevels.map((level, index) => (
                  <li key={index} className="mb-2">
                    <span className="font-semibold">{level.name}:</span> {level.xp} XP
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
              <h2 className="mb-3 text-2xl font-semibold">Box #4</h2>
              <p className="m-0 text-sm opacity-50">Content for Box #4</p>
            </div>

            <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
              <h2 className="mb-3 text-2xl font-semibold">Box #5</h2>
              <p className="m-0 text-sm opacity-50">Content for Box #5</p>
            </div>

            <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
              <h2 className="mb-3 text-2xl font-semibold">Box #6</h2>
              <p className="m-0 text-sm opacity-50">Content for Box #6</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}