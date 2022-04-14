using JourCore.Backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace JourCore.Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class JoursController : ControllerBase
    {
        private readonly ILogger<JoursController> _logger;
        private readonly IJourService _cosmosDbService;

        public JoursController(ILogger<JoursController> logger, IJourService cosmosDbService)
        {
            _logger = logger;
            _cosmosDbService = cosmosDbService ?? throw new ArgumentNullException(nameof(cosmosDbService));
        }

        // GET api/jours
        [HttpGet]
        public async Task<IActionResult> List()
        {
            return Ok(await _cosmosDbService.GetMultipleAsync("SELECT * FROM c"));
        }

        // GET api/jours/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(string id)
        {
            return Ok(await _cosmosDbService.GetAsync(id));
        }

        // POST api/jours

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] Jour jour)
        {
            jour.Id = Guid.NewGuid().ToString();
            await _cosmosDbService.AddAsync(jour);
            return CreatedAtAction(nameof(Get), new { id = jour.Id }, jour);
        }

        // PUT api/jours/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Edit([FromBody] Jour jour)
        {
            await _cosmosDbService.UpdateAsync(jour.Id, jour);
            return NoContent();
        }

        // DELETE api/jours/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            await _cosmosDbService.DeleteAsync(id);
            return NoContent();
        }
    }
}