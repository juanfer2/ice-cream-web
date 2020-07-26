export const findElement = (wrapper, element) => {
  return wrapper.find(element).first()
}

export const findElementAll = (wrapper, element) => {
  return wrapper.find(element)
}

export const findClassInElement = (wrapper, element, class_) => {
  return findElement(wrapper, element).hasClass(class_)
}

export const findElementExist = (wrapper, element) => {
  return findElement(wrapper, element).exists()
}

export const findElement_position = (wrapper, element, pos) => {
  return findElementAll(wrapper, element).get(pos)
}

export const findElementByTextInArray = (wrapper, elements_, text) => {
  return findElementAll(wrapper, elements_)
    .findWhere(
      (n) => n.text().toLowerCase().trim() == text.toLowerCase().trim(),
    )
    .first()
}

export const findAllElementByText_in_array = (wrapper, elements_, text) => {
  const wrapper_ = findElementAll(wrapper, elements_)
  return wrapper_.findWhere((n) => {
    if (
      n.text().toLowerCase().trim() == text.toLowerCase().trim() &&
      n.instance()
    ) {
      return n
    }
  })
}

export const getTextElement = (wrapper, element) => {
  const text = findElement(wrapper, element).text()
  return String(text).replace(/[!@#$%^&"| "*]|\s+|\s+$/g, '')
}
