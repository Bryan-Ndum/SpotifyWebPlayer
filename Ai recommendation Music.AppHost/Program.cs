var builder = DistributedApplication.CreateBuilder(args);

var apiService = builder.AddProject<Projects.Ai_recommendation_Music_ApiService>("apiservice");

builder.AddProject<Projects.Ai_recommendation_Music_Web>("webfrontend")
    .WithExternalHttpEndpoints()
    .WithReference(apiService);

builder.Build().Run();
