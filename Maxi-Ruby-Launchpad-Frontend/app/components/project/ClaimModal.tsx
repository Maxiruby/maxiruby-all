// components
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "~/components/shared/Dialog";
import Button from "~/components/shared/Button";
import Input from "~/components/shared/Input";
import Image from "~/components/shared/Image";
import { ProjectCountdown } from "~/components/Project";

export default function ClaimModal({
  project,
  trigger,
}: {
  project: any;
  trigger: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent>
        <div className="grid gap-10 pb-4 pt-12">
          <div className="flex flex-wrap items-center justify-between gap-y-5 gap-x-8">
            <div className="flex items-center gap-x-3">
              <div className="flex w-12 h-12 rounded-full bg-secondary overflow-hidden">
                {/* <Image /> */}
              </div>

              <strong className="text-lg font-semibold">{project.name}</strong>
            </div>

            <div className="flex items-center divide-x divide-solid divide-border text-sm">
              <div className="flex flex-col justify-center items-center text-center gap-0.5">
                <strong className="font-semibold text-muted-foreground">
                  Claimable Tokens
                </strong>
                <span className="font-medium">50</span>
              </div>

              <div className="flex flex-col justify-center items-center text-center gap-0.5 pl-3 ml-3">
                <strong className="font-semibold text-muted-foreground">
                  Your Allocation
                </strong>
                <span className="font-medium">Public</span>
              </div>
            </div>
          </div>

          <ProjectCountdown project={project} showClaimCoundown />

          <div className="flex flex-col gap-y-2 w-full max-w-[400px] mx-auto">
            <div className="flex items-center justify-between gap-x-4">
              <span className="text-muted-foreground font-semibold">
                Amount to Claim
              </span>
              <span className="text-muted-foreground font-semibold">BNB</span>
            </div>

            <div className="relative flex items-center">
              <Input
                type="text"
                placeholder="0.00"
                value=""
                onChange={() => {}}
                className="pr-12"
              />
              <Button
                type="button"
                title="MAX"
                variant="ghost"
                className="absolute right-0.5 top-0.5 bottom-0.5 hover:bg-secondary hover:text-foreground"
                size="small"
              >
                MAX
              </Button>
            </div>
          </div>
        </div>
        <DialogFooter className="sm:justify-center">
          <Button
            type="submit"
            title="Claim"
            variant="primary"
            className="px-8"
          >
            Claim
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
