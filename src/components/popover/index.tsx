import * as RadixPopover from "@radix-ui/react-popover";

const Popover = () => (
  <RadixPopover.Root>
    <RadixPopover.Trigger />
    <RadixPopover.Anchor />
    <RadixPopover.Portal>
      <RadixPopover.Content>
        <ul></ul>
        <div>編集</div>
        <div>削除</div>
        <RadixPopover.Close />
      </RadixPopover.Content>
    </RadixPopover.Portal>
  </RadixPopover.Root>
);

export default Popover;
