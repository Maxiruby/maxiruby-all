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

export default function JoinModal({
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
          <div className="flex flex-col gap-y-2">
            <small className="font-medium text-muted-foreground text-sm">
              Progress
            </small>
            <div className="w-full h-3 bg-secondary/50 rounded-full">
              <div
                className="h-2.5 rounded-full bg-accent"
                style={{ width: "50%" }}
              />
            </div>
            <div className="flex flex-1 items-center justify-between gap-x-4">
              <div className="text-sm">0/200 BNB</div>
              <div className="text-sm">50%</div>
            </div>
          </div>

          <div className="flex flex-1 items-center justify-between gap-x-4">
            <div className="flex flex-col gap-y-2 text-start">
              <strong className="font-medium uppercase text-sm text-muted-foreground">
                MIN LIMIT
              </strong>
              <span className="font-semibold text-foreground uppercase">
                0.01 BNB
              </span>
            </div>

            <div className="flex flex-col gap-y-2 text-end">
              <strong className="font-medium uppercase text-sm text-muted-foreground">
                MAX LIMIT
              </strong>
              <span className="font-semibold text-foreground uppercase">
                10.00 BNB
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-y-2">
            <div className="flex items-center justify-between gap-x-4">
              <span className="text-muted-foreground font-semibold">
                Enter Amount
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
