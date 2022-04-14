using Newtonsoft.Json;

namespace JourCore.Backend
{
    public class Jour
    {
        [JsonProperty(PropertyName = "id")]
        public string Id { get; set; } 

        [JsonProperty(PropertyName ="name")]
        public string Name { get; set; }    
        
        [JsonProperty(PropertyName ="city")]
        public string City { get; set; }

        [JsonProperty(PropertyName = "email")]
        public string Email { get; set; }

        [JsonProperty(PropertyName = "comment")]
        public string Comment { get; set; }
    }
}