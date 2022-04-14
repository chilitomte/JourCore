using Microsoft.Azure.Cosmos;

namespace JourCore.Backend.Services
{
    public interface IJourService
    {
        Task<IEnumerable<Jour>> GetMultipleAsync(string query);
        Task<Jour> GetAsync(string id);
        Task AddAsync(Jour Jour);
        Task UpdateAsync(string id, Jour Jour);
        Task DeleteAsync(string id);
    }

    public class JourService : IJourService
    {
        private readonly Container _container;

        public JourService(
            CosmosClient cosmosDbClient,
            string databaseName,
            string containerName)
        {
            _container = cosmosDbClient.GetContainer(databaseName, containerName);
        }

        public async Task AddAsync(Jour Jour)
        {
            await _container.CreateItemAsync(Jour, new PartitionKey(Jour.Id));
        }

        public async Task DeleteAsync(string id)
        {
            await _container.DeleteItemAsync<Jour>(id, new PartitionKey(id));
        }

        public async Task<Jour> GetAsync(string id)
        {
            try
            {
                var response = await _container.ReadItemAsync<Jour>(id, new PartitionKey(id));
                return response.Resource;
            }
            catch (CosmosException) //For handling Jour not found and other exceptions
            {
                return null;
            }
        }

        public async Task<IEnumerable<Jour>> GetMultipleAsync(string queryString)
        {
            var query = _container.GetItemQueryIterator<Jour>(new QueryDefinition(queryString));
            var results = new List<Jour>();
            while (query.HasMoreResults)
            {
                var response = await query.ReadNextAsync();
                results.AddRange(response.ToList());
            }
            return results;
        }

        public async Task UpdateAsync(string id, Jour Jour)
        {
            await _container.UpsertItemAsync(Jour, new PartitionKey(id));
        }
    }
}