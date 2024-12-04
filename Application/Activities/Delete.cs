using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
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
                var activity = await _context.Activities.FindAsync(request.Id);
                // If the activity is null, throw an exception
                _context.Remove(activity);
                // activity.Title = request.Activity.Title ?? activity.Title;
                await _context.SaveChangesAsync();
            }
        }

    }
}