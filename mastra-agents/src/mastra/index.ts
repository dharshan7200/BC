import { Mastra } from '@mastra/core';
import { jobAssistant } from './agents/job-assistant';
import { queryOblivionTool, submitJobTool, getWorkerStatsTool } from './tools/oblivion-api';

export const mastra = new Mastra({
    agents: {
        jobAssistant,
    },
    tools: {
        queryOblivion: queryOblivionTool,
        submitJob: submitJobTool,
        getWorkerStats: getWorkerStatsTool,
    },
});

// For local testing
if (import.meta.url === `file://${process.argv[1]}`) {
    console.log('🤖 OBLIVION Mastra Agents initialized');
    console.log('📋 Available agents:', Object.keys(mastra.agents));
    console.log('🛠️  Available tools:', Object.keys(mastra.tools));
    console.log('\n✅ Ready to deploy to Mastra Cloud!');
}
