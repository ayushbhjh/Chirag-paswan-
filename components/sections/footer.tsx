import { profile } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020611] py-8 text-center text-sm text-white/60">
      <div className="container space-y-2">
        <p>{profile.legacy}</p>
        <p>© {new Date().getFullYear()} {profile.name}. Official Digital Presence.</p>
      </div>
    </footer>
  );
}
