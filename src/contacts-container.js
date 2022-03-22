class ContactsContainer {
  constructor() {
  }
}

module.exports = {
  default: async function() {
  },

  all: async function() {
  },

  withIdentifier: async function(identifier) {
    return (await this.all()).filter(container => container.identifier = identifier);
  }
}
module.exports = ContactsContainer;