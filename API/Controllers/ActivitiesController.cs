using Application.Activities;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {


        [HttpGet] //api/activities

        public async Task<IActionResult> GetActivities()
        {
            return HandleResult(await Mediator.Send(new ListActivities.Query()));
        }

        [HttpGet("{id}")] //api/activities/fdfkdffdfd

        public async Task<IActionResult> GetACtivity(Guid id)
        {
            return HandleResult(await Mediator.Send(new ActivityDetails.Query { Id = id }));
        }

        [HttpPost]
        public async Task<IActionResult> CreateActivity(Activity activity)
        {
            return HandleResult(await Mediator.Send(new Create.Command { Activity = activity }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditActivity(Guid id, Activity activity)
        {
            // Set the ID of the activity to the ID of the parameter
            activity.Id = id;
            // Send the activity to the Edit handler
            // Return a 200 OK response
            return HandleResult(await Mediator.Send(new Edit.Command { Activity = activity }));
           
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActivity(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { Id = id }));
        }
    }
}