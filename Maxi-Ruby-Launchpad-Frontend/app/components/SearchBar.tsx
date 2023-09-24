import React from "react";

// components
import Icon from "~/components/shared/Icon";
import Input from "~/components/shared/Input";

export default function SearchBar() {
  const searchbar = React.useRef<HTMLInputElement>(null);
  const [query, setQuery] = React.useState<string>("");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  // add keyboard shortcuts
  const handleKeyDown = React.useCallback((event: KeyboardEvent) => {
    if (event.key === "/" && document.activeElement !== searchbar.current) {
      event.preventDefault();
      searchbar.current!.focus();
    }

    if (
      event.key === "Escape" &&
      document.activeElement === searchbar.current
    ) {
      event.preventDefault();
      searchbar.current!.blur();
    }
  }, []);

  // initialize keyboard shortcut listener
  React.useEffect(() => {
    if (!searchbar.current) return;

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [searchbar.current]);

  return (
    <div
      className="flex flex-1 sm:min-w-[600px] w-full mx-auto px-3"
      tabIndex={-1}
    >
      <div className="relative flex flex-1 items-center">
        <Input
          ref={searchbar}
          type="text"
          className="peer flex-1 pl-11 rounded-xl"
          placeholder="Search items, collections, creators..."
          value={query}
          onChange={handleOnChange}
        />

        <Icon
          icon="search"
          className="absolute left-3 text-muted-foreground peer-focus:text-foreground transition-colors"
        />

        <span className="absolute right-3 min-w-[24px] flex items-center justify-center py-1 px-1.5 rounded-lg bg-secondary/50 text-xs text-muted-foreground font-bold after:content-['/'] peer-focus:after:content-['esc']"></span>
      </div>
    </div>
  );
}
