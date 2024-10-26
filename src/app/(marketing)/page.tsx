import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div className="py-10 flex flex-col items-center justify-center gap-y-5">
      <Button variant={"base"}>button base</Button>

      <Button variant={"default"}>button default</Button>

      <Button variant={"primary"}>button primary</Button>
      <Button variant={"primaryOutline"}>button primary-outline</Button>

      <Button variant={"secondary"}>button secondary</Button>
      <Button variant={"secondaryOutline"}>button secondary-outline</Button>

      <Button variant={"danger"}>button danger</Button>
      <Button variant={"dangerOutline"}>button danger-outline</Button>

      <Button variant={"super"}>button super</Button>
      <Button variant={"superOutline"}>button super-outline</Button>

      <Button variant={"ghost"}>button super</Button>

      <Button variant={"sidebar"}>button sidebar</Button>
      <Button variant={"sidebarOutline"}>button sidebar-outline</Button>
    </div>
  );
}
