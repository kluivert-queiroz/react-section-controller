# React Section Controller

This package provides a way to easily handle sections, programmatically scrolling into other sections and checking whether current section is in viewport or not.

## Scrolling to specified sections

```tsx
const ScrollToSectionButton = ({ linkedTo }) => {
  const ctx = useSectionController();
  const handleClick = () => {
    ctx.scrollToIndex(linkedTo, {
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  };
  return <button onClick={handleClick}>Go to Section #{linkedTo + 1}!</button>;
};

<SectionController>
	<Section>
		<ScrollToSectionButton linkedTo={1} />
	</Section>,
	<Section>
		<ScrollToSectionButton linkedTo={2} />
	</Section>,
	<Section>
		<ScrollToSectionButton linkedTo={0} />
	</Section>
</SectionController>
```

## Checking if section is in viewport

```tsx
const ScrollToSectionButton = ({ linkedTo }) => {
  const { isVisible, index } = useSection();
	useEffect(() => {
		if(isVisible) alert(`Section #${index} is Visible`)
	},[isVisible])
  return <p>Some text...</p>;
};

<SectionController>
	<Section>
		<ScrollToSectionButton linkedTo={1} />
	</Section>,
	<Section>
		<ScrollToSectionButton linkedTo={2} />
	</Section>,
	<Section>
		<ScrollToSectionButton linkedTo={0} />
	</Section>
</SectionController>
```