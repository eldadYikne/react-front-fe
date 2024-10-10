export interface HeaderLink {
  href: Lowercase<HeaderTextLink>;
  text: HeaderTextLink;
}

type HeaderTextLink = "Home" | "Images" | "Repositories";
