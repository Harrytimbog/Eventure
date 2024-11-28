using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Activity Activity { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                // Find the activity by its ID
                var activity = await _context.Activities.FindAsync(request.Activity.Id);

                // If the activity is null, throw an exception
                activity.Title = request.Activity.Title ?? activity.Title;

                await _context.SaveChangesAsync();
            }
        }
    }
}