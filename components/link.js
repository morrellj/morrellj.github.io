class Link {
  /**
   *
   * @param {object} {fieldName:{string},link:{array}}
   *
   */
  constructor(fieldSettings) {
    let self = this;
    self.fieldSettings = fieldSettings;
    self.schema = {
      tag: "a",
      props: {
        classList: [fieldSettings.fieldName, "link-link"],
        target: "_blank",
        href: (function () {
          return fieldSettings.link[1].indexOf("http") >= 0
            ? fieldSettings.link[1]
            : window.location.href.slice(
                0,
                window.location.href.lastIndexOf("/")
              ) +
                "/documents/" +
                fieldSettings.link[1];
        })(),
        innerHTML: fieldSettings.link[0],
      },
    };
  }
}
