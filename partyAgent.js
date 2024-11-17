import { Agent } from '@upstreet/agent-sdk';

const gameThemes = {
  Mario: ['Mario Balloons', 'Mario Tableware', 'Mario Banner'],
  Fortnite: ['Fortnite Cups', 'Fortnite Plates', 'Fortnite Wall Poster'],
  Halo: ['Halo-themed Balloons', 'Spartan Action Figures', 'Halo Tablecloth'],
};

const eventTypes = {
  Birthday: ['Birthday Cake Topper', 'Party Hats', 'Candles'],
  Hangout: ['Themed Coasters', 'Snack Bowls', 'Casual Napkins'],
};

export const recommendSupplies = (game, event) => {
  const themeSupplies = gameThemes[game] || [];
  const eventSupplies = eventTypes[event] || [];
  return [...themeSupplies, ...eventSupplies];
};

export const PartyAgent = new Agent({
  name: 'Game Party Planner',
  description: 'Recommends themed party supplies based on game franchise and event type.',
  actions: {
    getRecommendations: {
      handler: (input) => {
        const { game, event } = input;
        return recommendSupplies(game, event);
      },
      inputSchema: {
        type: 'object',
        properties: {
          game: { type: 'string', enum: Object.keys(gameThemes) },
          event: { type: 'string', enum: Object.keys(eventTypes) },
        },
        required: ['game', 'event'],
      },
      outputSchema: {
        type: 'array',
        items: { type: 'string' },
      },
    },
  },
});
